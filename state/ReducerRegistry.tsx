import type { Reducer } from 'redux';
import { combineReducers } from 'redux';

declare type NameReducerMap<S, A> = {
  // @ts-ignore
  [name: string]: Reducer<S, A>;
};

class ReducerRegistry {
  _elements: NameReducerMap<any, any>;

  /**
   * Creates a ReducerRegistry instance.
   */
  constructor() {
    /**
     * The set of registered reducers, keyed based on the field each reducer
     * will manage.
     *
     * @private
     * @type {NameReducerMap}
     */
    this._elements = {};
  }

  /**
   * Combines all registered reducers into a single reducing function.
   *
   * @param {Object} [additional={}] - Any additional reducers that need to be
   * included (such as reducers from third-party modules).
   * @returns {Function}
   */
  combineReducers(additional: NameReducerMap<any, any> = {}) {
    // $FlowExpectedError
    return combineReducers({
      ...this._elements,
      ...additional,
    });
  }

  /**
   * Adds a reducer to the registry.
   *
   * The method is to be invoked only before {@link #combineReducers()}.
   *
   * @param {string} name - The field in the state object that will be managed
   * by the provided reducer.
   * @param {Reducer} reducer - A Redux reducer.
   * @returns {void}
   */
  register(name: string, reducer: Reducer<any, any>) {
    this._elements[name] = reducer;
  }
}

/**
 * The public singleton instance of the ReducerRegistry class.
 */
export default new ReducerRegistry();
