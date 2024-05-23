// 회원가입 훅 - 담당자 채윤 (240513)

const API_URL = process.env.REACT_APP_API_URL;

const useSignup = () => {
    const signup = async(body) => {
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(body)
            })
            const result = await response.json();
            console.log('결과:',result);
        } catch (error) {
            console.log('에러:',error);
        }
    }
    return {signup}
}
export default useSignup