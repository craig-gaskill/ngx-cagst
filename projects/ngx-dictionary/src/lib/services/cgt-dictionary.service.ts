import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {CgtDictionary} from '../models/cgt-dictionary';

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
  providedIn: 'root'
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
   * @param dictionaryMeaning
   *    The meaning of the dictionary to get.
   * @param include
   *    Extra values to return. Valid options are ("values", "attributes").
   *
   * @returns An {@link Observable} representing the found {@link CgtDictionary}.
   */
  public getDictionaryByMeaning(dictionaryMeaning: string, include: string[] = []): Observable<CgtDictionary> {
    let params = new HttpParams();
    if (include && include.length > 0) {
      for (const inc of include) {
        params = params.append('with', inc);
      }
    }

    const url = `${this.BASE_URL}/${dictionaryMeaning}`;

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
}
