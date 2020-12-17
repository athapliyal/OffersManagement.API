
export const login = async (username:string, password:string) => {
    // simulate backend request
    var request = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })

    return request;
}