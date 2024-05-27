// 회원가입 훅 - 담당자 채윤 (240513)
// 최종 수정 240527 : node.js 회원가입 기능 연결
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
            return result;
            // console.log('결과:',result);
        } catch (error) {
            return {status:400, data:{message:'Signup Server Error'}};
            // console.log('에러:',error);
        }
    }
    return {signup}
}
export default useSignup