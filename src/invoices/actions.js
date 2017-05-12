import { createActions } from 'redux-actions';
import * as actionTypes from './actionTypes.js'

export const { addInvoice, editInvoice, deleteInvoice } =
  createActions({
      [actionTypes.ADD_INVOICE]: invoice => (invoice),
      [actionTypes.EDIT_INVOICE]: invoice => (invoice)
  }, actionTypes.DELETE_INVOICE)