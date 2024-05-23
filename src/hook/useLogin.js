// 로그인 훅 - 담당자 채윤 (240513)

const API_URL = process.env.REACT_APP_API_URL;

const useLogin = () => {
    const login = async(body) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
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
    return {login}
}
export default useLogin