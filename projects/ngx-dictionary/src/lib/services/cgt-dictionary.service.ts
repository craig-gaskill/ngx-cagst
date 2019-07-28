import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {CgtDictionary} from '../models/cgt-dictionary';
import {CgtDictionaryValue} from '../models/cgt-dictionary-value';
import {CgtDictionaryModule} from '../cgt-dictionary.module';

/**
 * Interface used by consumers of this API to configure the URL of the application-specific endpoint.
 * When implementing, set {@code baseUrl} to the API base with the dictionary endpoint appended.
 * It is recommended to store this in an {@code environment} file.
 */
export interface CgtDictionaryServiceConfig {
  baseUrl: string;
}

/**
 * Service used to get dictionaries and their values. {@link CgtDictionaryServiceConfig} must be implemented in the calling app.
 * To provide your implementation, add the following to your root module <code>providers</code> array:
 * <code>{ provide: "DictionaryServiceConfig", useClass: **Implemented class name** }</code>
 */
@Injectable({
  providedIn: CgtDictionaryModule
})
export class CgtDictionaryService {
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
   * Get the list of available dictionaries.
   *
   * @param start
   *    Optional low-end parameter used in pagination.
   * @param limit
   *    Optional high-end parameter used in pagination.
   * @param name
   *    Optional search parameter used to filter the returned results.
   *
   * @returns An {@link Observable} of {@link CgtDictionary} objects.
   */
  public getDictionaries(start = 0, limit = 20, name?: string): Observable<CgtDictionary[]> {
    let params = new HttpParams()
      .set('start', start.toString())
      .set('limit', limit.toString());

    if (name != null) {
      params = params.set('name', name);
    }

    return this._httpClient.get<CgtDictionary[]>(this.BASE_URL, {params})
      .pipe(
        catchError(CgtDictionaryService.handleError)
      );
  }

  /**
   * Get a {@link CgtDictionary} by its unique meaning.
   *
   * @param meaning
   *    The meaning of the dictionary to get.
   * @param include
   *    Extra values to return. Valid options are ("values", "attributes").
   *
   * @returns An {@link Observable} representing the found {@link CgtDictionary}.
   */
  public getDictionaryByMeaning(meaning: string, include: string[] = []): Observable<CgtDictionary> {
    let params = new HttpParams();
    if (include && include.length > 0) {
      for (const inc of include) {
        params = params.append('with', inc);
      }
    }

    const url = `${this.BASE_URL}/${meaning}`;

    return this._httpClient.get<any>(url, {params})
      .pipe(
        catchError(CgtDictionaryService.handleError)
      );
  }

  /**
   * Create a {@link CgtDictionary}.
   *
   * @param dictionary
   *    The {@link CgtDictionary} to create.
   *
   * @returns An {@link Observable} that returns the added {@link CgtDictionary}, null if not added.
   */
  public createDictionary(dictionary: CgtDictionary): Observable<CgtDictionary> {
    return this._httpClient.post<CgtDictionary>(`${this.BASE_URL}`, dictionary)
      .pipe(
        catchError(CgtDictionaryService.handleError)
      );
  }

  /**
   * Updates the {@link CgtDictionary}.
   *
   * @param dictionary
   *    The {@link CgtDictionary} to update.
   *
   * @returns An {@link Observable} that returns the updated {@link CgtDictionary}, null if not added.
   */
  public updateDictionary(dictionary: CgtDictionary): Observable<CgtDictionary> {
    const url = `${this.BASE_URL}/${dictionary.dictionaryId}`;

    return this._httpClient.put<CgtDictionary>(url, dictionary)
      .pipe(
        catchError(CgtDictionaryService.handleError)
      );
  }

  /**
   * Deletes the {@link CgtDictionary}.
   *
   * @param dictionary
   *    The {@link CgtDictionary} to delete.
   *
   * @returns An {@link Observable} that returns a boolean to indicate if the delete was successful.
   */
  public deleteDictionary(dictionary: CgtDictionary): Observable<boolean> {
    const url = `${this.BASE_URL}/${dictionary.dictionaryId}`;

    return this._httpClient.delete<boolean>(url, {observe: 'response'})
      .pipe(
        map(response => response.status === 204),
        catchError(CgtDictionaryService.handleError)
      );
  }

  /**
   * Get a list of dictionary values from a given dictionary.
   *
   * @param meaning
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
  public getDictionaryValues(meaning: string,
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

    const url = `${this.BASE_URL}/${meaning}/values`;

    return this._httpClient.get<any>(url, {params})
      .pipe(
        catchError(CgtDictionaryService.handleError)
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
        catchError(CgtDictionaryService.handleError)
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
        catchError(CgtDictionaryService.handleError)
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
        catchError(CgtDictionaryService.handleError)
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
        catchError(CgtDictionaryService.handleError)
      );
  }
}
