function generateRandomString(): string {
    return Math.random().toString(36)
        .slice(2) + Math.random().toString(36)
        .slice(2)
}

const generateUniqCode = (existingNumbers: Array<string>): string => {
    let randomString
    do {
        randomString = generateRandomString()
    } while (existingNumbers.includes(randomString))
    return randomString
}

export const returnUniqCode = (codes: Array<{ code: string | null }>): string => {
    const existingNumbers = codes.map(({ code }) => {
        return code ?? '1'
    })

    return generateUniqCode(existingNumbers)
}

export const returnUniqCodes = (codes: Array<{ emailCode: string | null }>): string => {
    const existingNumbers = codes.map(({ emailCode }) => {
        return emailCode ?? '1'
    })

    return generateUniqCode(existingNumbers)
}
