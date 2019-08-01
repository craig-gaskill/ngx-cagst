import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {CgtDictionaryServiceConfig} from './cgt-dictionary.service';
import {CgtDictionaryValue} from '../models/cgt-dictionary-value';

@Injectable({
  providedIn: 'root'
})
export class CgtDictionaryValueService {
  private readonly BASE_URL: string;

  constructor(private _httpClient: HttpClient,
              @Inject('CgtDictionaryServiceConfig') private _config: CgtDictionaryServiceConfig
  ) {
    this.BASE_URL = _config.baseUrl;
  }

  private static handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }

  /**
   * Get a list of dictionary values from a given dictionary.
   *
   * @param dictionaryMeaning
   *    The dictionary to get values from.
   * @param start
   *    Optional low-end parameter used in pagination. Set to <code>pageSize * (pageNumber - 1)</code>.
   * @param limit
   *    Optional high-end parameter used in pagination. Set to <code>pageSize</code>.
   * @param name
   *    Optional search parameter used to filter the returned results.
   * @param include
   *    Extra values to return. Valid options are ("mappings", "attributes").
   *
   * @returns An {@link Observable} of {@link CgtDictionaryValue} objects.
   */
  public getDictionaryValues(dictionaryMeaning: string,
                             start = 0,
                             limit = 20,
                             name: string = null,
                             include: string[] = []): Observable<CgtDictionaryValue[]> {
    let params = new HttpParams()
      .set('start', start.toString())
      .set('limit', limit.toString());

    if (name != null) {
      params = params.set('name', name);
    }
    if (include && include.length > 0) {
      for (const inc of include) {
        params = params.append('with', inc);
      }
    }

    const url = `${this.BASE_URL}/${dictionaryMeaning}/values`;

    return this._httpClient.get<CgtDictionaryValue[]>(url, {params})
      .pipe(
        catchError(CgtDictionaryValueService.handleError)
      );
  }

  /**
   * Get a single {@link CgtDictionaryValue} from a given dictionary.
   *
   * @param dictionaryMeaning
   *    The dictionary to get a value from.
   * @param dictionaryValue
   *    The ID or Meaning of the dictionary value to retrieve.
   * @param include
   *    An optional array of additional parameters (such as <code>mapping</code> or <code>attributes</code>).
   *
   * @returns An {@link Observable} representing a {@link CgtDictionaryValue} object or null.
   */
  public getDictionaryValue(dictionaryMeaning: string, dictionaryValue: number|string, include: string[] = [])
    : Observable<CgtDictionaryValue> {

    let params = new HttpParams();
    if (include && include.length > 0) {
      for (const inc of include) {
        params = params.append('with', inc);
      }
    }

    const url = `${this.BASE_URL}/${dictionaryMeaning}/values/${dictionaryValue}`;

    return this._httpClient.get<CgtDictionaryValue>(url, {params})
      .pipe(
        catchError(CgtDictionaryValueService.handleError)
      );
  }

  /**
   * Create a {@link CgtDictionaryValue} in a given dictionary.
   *
   * @param meaning
   *    The dictionary to add a value to.
   * @param dictionaryValue
   *    The value to add.
   *
   * @returns An {@link Observable} that returns the added {@link CgtDictionaryValue}, null if not added.
   */
  public createDictionaryValue(meaning: string, dictionaryValue: CgtDictionaryValue): Observable<CgtDictionaryValue> {
    const url = `${this.BASE_URL}/${meaning}/values`;

    return this._httpClient.post<CgtDictionaryValue>(url, dictionaryValue)
      .pipe(
        catchError(CgtDictionaryValueService.handleError)
      );
  }

  /**
   * Update a {@link CgtDictionaryValue} in a given dictionary.
   *
   * @param meaning
   *    The dictionary to update the value to.
   * @param dictionaryValue
   *    The updated value (which one to update is determined by ID).
   *
   * @returns An {@link Observable} that returns the updated {@link CgtDictionaryValue}, null if not added.
   */
  public updateDictionaryValue(meaning: string, dictionaryValue: CgtDictionaryValue): Observable<CgtDictionaryValue> {
    const url = `${this.BASE_URL}/${meaning}/values/${dictionaryValue.dictionaryValueId}`;

    return this._httpClient.put<CgtDictionaryValue>(url, dictionaryValue)
      .pipe(
        catchError(CgtDictionaryValueService.handleError)
      );
  }

  /**
   * Delete a {@link CgtDictionaryValue} from a given dictionary.
   *
   * @param meaning
   *    The dictionary to delete the value from.
   * @param dictionaryValue
   *    The value to delete.
   *
   * @returns An {@link Observable} that returns whether or not the delete was successful.
   */
  public deleteDictionaryValue(meaning: string, dictionaryValue: CgtDictionaryValue): Observable<boolean> {
    const url = `${this.BASE_URL}/${meaning}/values/${dictionaryValue.dictionaryValueId}`;

    return this._httpClient.delete<boolean>(url, {observe: 'response'})
      .pipe(
        map(response => response.status === 204),
        catchError(CgtDictionaryValueService.handleError)
      );
  }
}
