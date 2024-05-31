// 커스텀 Delete Part 관리 훅 - 담당자 정준 (240530)
const API_URL = process.env.REACT_APP_API_URL;

const useCustom = () => {
    const getCustomDel = async(language) => {
        try {
            const userId = localStorage.getItem('id');
            const response = await fetch(`${API_URL}/api/mycustom?language=${language}&userId=${userId}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
            });
            const result = await response.json();
            console.log("id : ", userId)
            return result;
        } catch (error) {
            return {status:400, data:{message:'CustomDel Get Server Error'}};
        }
    }

    // 오답노트의 문제를 삭제하는 함수
    const deleteCustomDel = async(codeId) => {
      try {
          const response = await fetch(`${API_URL}/api/mycustom/${codeId}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          const result = await response.json();
          return result;
      } catch (error) {
          return {status: 400, data: {message: 'Wrong Note Delete Server Error'}};
      }
  }
    return {getCustomDel, deleteCustomDel}
}
export default useCustom