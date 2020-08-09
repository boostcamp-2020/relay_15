import joblib
# 입력된 문자열을 데이터셋에 입력값으로 적합한 형태로 변경해 결과를 반환
def string_to_list(string1):
    f=open("col_list_final2.txt","r")
    lines=f.readlines()[0].split()
    lines=lines[1:]
    # print(lines)
    length=len(lines)
    result=[0]*length
    for i in range(length):
        if lines[i] in string1:
            result[i]+=1
            if lines[i] == "ㅂㅅ":
                print("!!")
    # print(sum(result))
    return result
    pass

# 모델 호출
classifier1 = joblib.load('nb_classifier4.pkl')
# 사용은 아래와 같다
# classifier1.predict([string_to_list(input_string)])

# 콘솔에서 입력받아서 테스팅하는 코드
print("욕설이다 -->1  욕설이 아니다 --> 0")
s1=""
while s1!="end":
    print("테스트 케이스 입력")
    s1=input()
    print("입력문장: "+s1)
    print("예측결과: "+str(classifier1.predict([string_to_list(s1)])))
# str1="솔직히 저건 너무 나갔지 조금 조심해야 할 듯"
# print("입력문장: "+str1)
# print(classifier1.predict([string_to_list(str1)]))
# str2="응 시발놈 나가 뒤져 그냥"
# print("입력문장: "+str2)
# print(classifier1.predict([string_to_list(str2)]))
# str3="아 오늘도 코딩하기 너무 싫다"
# print("입력문장: "+str3)
# print(classifier1.predict([string_to_list(str3)]))
# str4="웹 서버 개발 너무 어려워요 능력자분들 대단"
# print("입력문장: "+str4)
# print(classifier1.predict([string_to_list(str4)]))
# str5="병신ㅋㅋ 제발 좀 나대지마셈"
# print("입력문장: "+str5)
# print(classifier1.predict([string_to_list(str5)]))
# str6="귀요미귀요미 교미교미 찡긋~!"
# print("입력문장: "+str6)
# print(classifier1.predict([string_to_list(str6)]))
# str7="사볼 그만 좀 해라 인균아 적당히 해야지 ㅂㅅ쉑ㅋㅋ~!"
# print("입력문장: "+str7)
# print(classifier1.predict([string_to_list(str7)]))