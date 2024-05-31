// 타이핑 훅 - 담당자 채윤 (240531)
const API_URL = process.env.REACT_APP_API_URL;

const useTyping = () => {
    const getLongType = async(codeId) => {
        try {
            const response = await fetch(`${API_URL}/longcode/${codeId}`);
            const result = await response.json();
            return result;
            // console.log('결과:',result);
        } catch (error) {
            return {status:400, data:{message:'Long Typing Server Error'}};
            // console.log('에러:',error);
        }
    }
    const getBlankType = async(codeId) => {
        try {
            const response = await fetch(`${API_URL}/blankcode/${codeId}`);
            const result = await response.json();
            return result;
            // console.log('결과:',result);
        } catch (error) {
            return {status:400, data:{message:'Blank Typing Server Error'}};
            // console.log('에러:',error);
        }
    }
    return {getLongType, getBlankType}
}
export default useTyping