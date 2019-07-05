import { GETLIST, ADDSTATEMENT, MODIFYSTATEMENT, DELSTATEMENT } from '../types/statement'
import { createAction } from 'redux-actions'
import wxRequest from '@/utils/wxRequest'
import Session from '@/utils/session'

export const asyncList = createAction(GETLIST, () => {
	   var bookId = 1
     if (Session.get('current_book_id') !== null) {
         bookId = Session.get('current_book_id')
     }
    return new Promise(async (resolve,reject) => {
    const result = await wxRequest.Get('books/' + bookId + '/records/')
    resolve(result)
  })
})

export const addStatement = createAction(ADDSTATEMENT, (object) => {
  return object
})

export const modifyStatement = createAction(MODIFYSTATEMENT, (object) => {
  return object
})

export const delStatement = createAction(DELSTATEMENT, (id) => {
  return id
})

