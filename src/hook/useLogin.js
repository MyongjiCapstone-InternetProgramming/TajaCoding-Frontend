// 로그인 훅 - 담당자 채윤 (240513)
// 최종 수정 240527 : node.js 로그인 기능 연결
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
            return result
            // console.log('결과:',result);
        } catch (error) {
            return {status:400, data:{message:'Server Error 발생'}}
            // console.log('에러:',error);
        }
    }
    return {login}
}
export default useLogin