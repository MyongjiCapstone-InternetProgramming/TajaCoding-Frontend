// 커스텀 관리 훅 - 담당자 채윤 (240530)
const API_URL = process.env.REACT_APP_API_URL;

const useCustom = () => {
    const getCustom = async(language) => {
        try {
            const response = await fetch(`${API_URL}/api/custom/${language}`)
            const result = await response.json();
            return result;
        } catch (error) {
            return {status:400, data:{message:'Custom Get Server Error'}};
        }
    }
    const writeCustom = async(body) => {
        try {
            const response = await fetch(`${API_URL}/api/custom`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(body)
            })
            const result = await response.json();
            return result
        } catch (error) {
            return {status:400, data:{message:'Server Error 발생'}}
        }
    }
    return {getCustom, writeCustom}
}
export default useCustom