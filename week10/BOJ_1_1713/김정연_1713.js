//https://velog.io/@jiiihyee/%EB%B0%B1%EC%A4%80-17113-%ED%9B%84%EB%B3%B4%EC%B6%94%EC%B2%9C%ED%95%98%EA%B8%B0-node.js
function solution(frame, n , arr){
    let stack= []
    let cnt = 0
    let cursor = [] //체크배열
    let count = parseInt(n/frame)

    for ( let j = 0 ; j < count; j ++){

        for ( let i  = 0; i < n ; i ++){
            let peo = Number(arr[i])
            if( stack.length <3){
                stack.push(peo)
                cursor.push(cnt++)  //액자 개수만큼 돌았다
            }
            else{  //똑같은게 있으면  
                if(stack.some(item => item === peo)){
                    stack[stack.indexOf(peo)] = peo   //해당 아이템있는 자리에 덮어씌움
                    cursor[stack.indexOf(peo)] = cnt++ //cnt도 해당아이템이 있는 인덱스에 덮어씌움
                }else{
                    //만약 똑같은게 없으면  
                    let min = Math.min(...cursor)   //cnt가 젤 작은 곳
                    stack[cursor.indexOf(min)] = peo   //cnt가 젤 작은 곳에 추가함
                    cursor[cursor.indexOf(min)] =cnt++ //cnt도 같이 덮어씌움
                }
                

            }
                      
        }

    }
    console.log(stack.sort((a,b)=> a-b))
  
}
console.log(solution(frame, n , arr))