const fs = require('fs');
var express = require('express');
var router = express.Router();

let test = {
  "no": 1,
  "email": "sample1@naver.com",
  "password": "abc",
  "name": "김성훈",
  "friends": [
      "contanct@naver.com",
      "theling@naver.com",
      "hello@naver.com"
  ],
  "character" : {
      "취향" : 1,
      "영화" : 2, 
      "음식" : 3,
      "활동시간" : 4
  }
}

const recommand = (test) => {
  const dataBuffer = fs.readFileSync('../public/database/users.json');
  const dataJson = dataBuffer.toString()
  const list = JSON.parse(dataJson);

  test = [...Object.values(test.character)];

//   let result = list.data.
//     filter(v => Object.values(v.character).
//     map((v, idx) => Math.abs(test[idx] - v)).
//     reduce((acc, cur) => acc + cur) > 0);

    let result = list.data.
    map((v) => {return [Object.values(v.character).
    map((v, idx) => Math.abs(test[idx] - v)).
    reduce((acc, cur) => acc + cur),v]});

    result.sort((a,b)=>{
        return a[0] - b[0];
    })

    const thres = result.filter(ele =>{
        if(parseInt(ele[0]) <= 5){
            return true;
        }else{
            return false;
        }
    })

    return(thres);
        }else{
            return false;
        }
    })

    return(thres);
        }else{
            return false;
        }
    })

    return(thres);
        }else{
            return false;
        }
    })

    return(thres);
        }else{
            return false;
        }
    })

    return(thres);
        }else{
            return false;
        }
    })

    return(thres);
}

console.log(recommand(test));