# -*- coding:utf-8 -*-


from collections import Counter

import pandas as pd
from konlpy.tag import Okt

# https://github.com/doljae/relay_15
# 한국어 stop word 목록을 구글링 해 csv파일로 생성
# https://github.com/stopwords-iso/stopwords-ko/blob/master/stopwords-ko.txt
# https://www.ranks.nl/stopwords/korean
# https://gist.github.com/spikeekips/40eea22ef4a89f629abd87eed535ac6a
stop_word=pd.read_csv("stop_word.csv")

# # train,test.txt를 csv 파일로 변환
# cwd = os.getcwd()
# file_path = os.path.join(cwd, 'train.txt')
# f=open(file_path,encoding="utf-8")
# item_num=[]
# text=[]
# label=[]
# for line in f.readlines():
#     line_list=line.split()
#     item_num.append(line_list[0])
#     if len(line_list)==3:
#         text.append("".join(line_list[1]))
#     else:
#         text.append(" ".join(line_list[1:-1]))
#     label.append(line_list[len(line_list)-1])
#     pass
#
# dict = {'content': text, 'label': label}
# df1 = pd.DataFrame(dict)
# df1.to_csv("train2.csv",index=False,encoding='utf-8-sig')

# 4639 + 1163 + 30199개의 데이터셋을 사용
train_df=pd.read_csv("train2.csv")
test_df=pd.read_csv("test2.csv")
result_df=pd.read_csv("result.csv")
# 텍스트 내용만을 추출
train_content=list(train_df.content)
test_content=list(test_df.content)
result_content=list(result_df.content)


train_corp=[]
test_corp=[]
result_corp=[]
# 텍스트 내용을 공백단위로 전부 분리 후 리스트에 저장
for item in train_content:
    item_list=item.split()
    train_corp+=item_list
for item in test_content:
    item_list=item.split()
    test_corp+=item_list
for item in result_content:
    print(item)
    if item=="nan" or item=="none" or item==None:
        break
    else:
        item_list=item.split()
        result_corp+=item_list

corp_merge=train_corp+test_corp+result_corp
# 저장된 리스트에서 counter를 통해 최빈 단어 10000개를 뽑아냄
corp_merge=(Counter(corp_merge).most_common(10000))
# print(corp_merge)

# 결과적으로 남은 단어들만 리스트로 저장
corp_merge_keys=[x for (x,y) in corp_merge]
# print(corp_merge_keys)
# print(len(corp_merge_keys))
# 수집한 한국어 stop word 리스트를 호출
stop_word_content=list(stop_word.stop_word)

corp_string=" ".join(corp_merge_keys)
stop_word_string=" ".join(stop_word_content)

# 최빈 단어 10000개, stop word 를 한국어 형태소 분석 모듈로 형태소 분석
okt = Okt()
t1=okt.pos(corp_string,norm= True, stem=True)
t2=okt.pos(stop_word_string,norm= True, stem=True)

# 형태소 분석 후 set으로 중복되는 것을 제거, 형태소 분석 결과 기준으로 소팅
t1=list(set(t1))
t1.sort(key=lambda x:x[1])
t2=list(set(t2))
t2.sort(key=lambda x:x[1])

# 형태소 분석 후 아래의 조사나 감탄사 등 의미가 없는 단어에 해당하는 형태소는 제거
bag_of_words=list(set(t1)-set(t2))
bag_of_words.sort(key=lambda x:x[1])
erase_list=["Determiner",
            "Exclamation",
            "Conjunction",
            "Josa",
            "Alpha",
            "Emoi",
            "Exclamation",
            "Modifier",
            "Number",
            "Punctuation",
            "Suffix",
            "VerbPrefix"]
bag_of_words=[x for (x,y) in bag_of_words if y not in erase_list]
print(bag_of_words)
# print(sorted(bag_of_words))
# print(len(bag_of_words))

# 최종적으로 사용할 feature의 목록을 txt 파일로 저장, 이것은 나중에 웹에서 호출할 때 사용
temp1="\n".join(bag_of_words)
f=open("col_list4444444.txt","w")
f.write(temp1)
f.close()

final_result=[]



# 앞에서 import 한 데이터셋에 대해서
for item in bag_of_words:
    train_df[item] = 0
# print(test_df.head(5))

for i in range(len(train_df)):
    # 댓글 내용 호출
    string1=train_df.iloc[i].content
    # print(string1)
    # 댓글 내용을 형태소 분석 후 list로 반환
    str_corp=[x for (x,y) in okt.pos(string1,norm= True, stem=True)]
    # feature set에서 형태소 분석 결과에 해당하면 빈도값을 올려줌
    for item in bag_of_words:
        if item in str_corp:
            train_df.loc[i,item]+=1
    print(str(i)+" 번째 데이터 처리 중")
print(train_df.head(5))
# csv로 처리된 데이터를 저장
train_df.to_csv("train5.csv",encoding='utf-8-sig')
final_result.append(train_df)
# print(train_content[0:20])


# 이하는 위와 동일
for item in bag_of_words:
    test_df[item] = 0
# print(test_df.head(5))
for i in range(len(test_df)):
    string1 = test_df.iloc[i].content
    # print(string1)
    str_corp = [x for (x, y) in okt.pos(string1, norm=True, stem=True)]
    for item in bag_of_words:
        if item in str_corp:
            test_df.loc[i, item] += 1
    print(str(i)+" 번째 데이터 처리 중")
print(test_df.head(5))
test_df.to_csv("test5.csv",encoding='utf-8-sig')
final_result.append(test_df)
# print(train_content[0:20])


for item in bag_of_words:
    result_df[item] = 0
# print(test_df.head(5))
for i in range(len(result_df)):
    string1 = result_df.iloc[i].content
    # print(string1)
    str_corp = [x for (x, y) in okt.pos(string1, norm=True, stem=True)]
    for item in bag_of_words:
        if item in str_corp:
            result_df.loc[i, item] += 1
    print(str(i)+" 번째 데이터 처리 중")
print(result_df.head(5))
result_df.to_csv("reslt5.csv",encoding='utf-8-sig')
final_result.append(result_df)

print("모든 데이터셋 전처리 완료")

frame = pd.concat(final_result, axis=0, ignore_index=True)
frame.to_csv("result_finalll3.csv",encoding='utf-8-sig')

print("최종 데이터셋 생성 완료")