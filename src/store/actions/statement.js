import { GETLIST, ADDSTATEMENT, MODIFYSTATEMENT, DELSTATEMENT } from '../types/statement'
import { createAction } from 'redux-actions'
import wxRequest from '@/utils/wxRequest'
import Session from '@/utils/session'

export const asyncList = createAction(GETLIST, () => {
	var id = 1
    if (Session.get('chanllenge_load_cache')) {
        let challenge = Session.get('chanllenge_load_cache')
    	console.log('challenge is =========', challenge)
        id = challenge['id']
    }
    console.log('id is =========', id)
  return new Promise(async (resolve,reject) => {
    const result = await wxRequest.Get('challenges/' + id + '/records/')
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

