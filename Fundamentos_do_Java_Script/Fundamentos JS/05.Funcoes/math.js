const num1 = 55
const num2 = 720
const div = num2/num1

const mRound = Math.round(div)
const mCeil = Math.ceil(div)
const mFloor = Math.floor(div)
const mTrunc = Math.trunc(div)
const mPow = Math.pow(num2, num1)
const mSqrt = Math.sqrt(num1)
const mMin = Math.min(num1,num2,div)
const mMax = Math.max(num1,num2,div)
const mRandom = Math.random()

const lista = [mRound,mCeil,mFloor,mTrunc,mPow,mSqrt,mMin,mMax,mRandom]
for(let iten in lista){
    console.log(lista[iten])
}