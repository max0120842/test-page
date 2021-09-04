// const t = setTimeout(() => {console.log('end')}, 4000)
// clearTimeout(t)
//
const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
            // resolve()
        }, wait)
    })
    return promise
}
//
// delay(2000)
//     .then(() => console.log('after 2 sec'))
//     .catch(err => console.log('error: ', err))
//     .finally(() => console.log('finally'))

const getPromise = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13, 21]))

// getPromise().then(data => console.log(data))
async function exampleAsync () {
    try {
    await delay(2000)
    const data = await getPromise()
    console.log('data: ', data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('finally')
    }
}

exampleAsync()