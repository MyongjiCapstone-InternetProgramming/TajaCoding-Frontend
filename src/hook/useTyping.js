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
    const getCustomType = async(codeId) => {
        try {
            const response = await fetch(`${API_URL}/api/customstart/${codeId}`);
            const result = await response.json();
            return result;
        } catch (error) {
            return {status:400, data:{message:'Long Typing Server Error'}};
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
    const refreshLongAvgTime = async(codeId, time) => {
        try {
            const response = await fetch(`${API_URL}/api/longcode`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    codeId: codeId,
                    time: time
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            return {status:400, data:{message:'refreshAvgTime Server Error'}};
        }
    }
    const refreshCustomAvgTime = async(codeId, time) => {
        try {
            const response = await fetch(`${API_URL}/api/custom`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    codeId: codeId,
                    time: time
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            return {status:400, data:{message:'refreshAvgTime Server Error'}};
        }
    }
    const refreshBlankAvgScore = async(codeId, score) => {
        try {
            const response = await fetch(`${API_URL}/api/blankcode`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    codeId: codeId,
                    score: score
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            return {status:400, data:{message:'refreshScore Server Error'}};
        }
    }
    return {getLongType, getCustomType, getBlankType, refreshLongAvgTime, refreshCustomAvgTime, refreshBlankAvgScore}
}
export default useTyping