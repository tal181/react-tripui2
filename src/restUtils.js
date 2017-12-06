'use strict'

import HTTPStatus from 'http-status'

const dataMock = [{id: 't1', title: 't1'}, {id: 't2', title: 't2'}, {id: 't3', title: 't3'}]

export const dataResMock = {

    json: function () {
        return new Promise((resolve, reject) => {
                resolve({'data': dataMock})
            }
        )
    },
    status: 200

}

export const remove = (url) => {
  return window.fetch(url, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const get = (url) => {
    return window.fetch(url,
        {
            method: 'GET',
             mode: 'no-cors',
//            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

export const post = ({url, body}) => {
    return window.fetch(url, {
        method: 'POST',
        credentials: 'include',
        body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const put = ({url, body}) => {
    return window.fetch(url, {
        method: 'PUT',
        credentials: 'include',
        body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const sendRequest = (url, options) => {
    return window.fetch(url, options)
}
export const failure = (responseError = {}, errorMapper) => {
    let retErrorId = 500 // generic server error
    let errorMessageFromServer = ''

    if (typeof responseError === 'object') {
        if (responseError.statusCode) {
            // error object was constructed from server
            let errorCode = responseError.statusCode
            retErrorId = (typeof errorMapper === 'function') ? errorMapper(errorCode) : errorCode
            errorMessageFromServer = (responseError.message) ? responseError.message : ''
        } else {
            retErrorId = (typeof errorMapper === 'function') ? errorMapper(responseError.status) : responseError.status
            errorMessageFromServer = (responseError.message) ? responseError.message : responseError.statusText
        }
    } else if (typeof responseError === 'string') {
        // not an object, use string
        errorMessageFromServer = responseError
    }
    return {
        errorId: retErrorId,
        errorMessageFromServer: errorMessageFromServer
    }
}

export function handleServerSuccess ( data, successMsgId) {
  if (successMsgId) {
    const successMsg =  'Success'
    window.Infra.showNotification(successMsg, 'success')
  }

}

// The default success action after ajax requests to get the JSON
export const success = (response) => {
  let responseStatus = response.status
  if (HTTPStatus.OK === responseStatus || HTTPStatus.NOT_MODIFIED === responseStatus) {
    return response.json()
      .then((json) => (json))
      .catch(() => (Promise.resolve())) // Some responses don't contain a body
  } else {
    throw response
  }
}