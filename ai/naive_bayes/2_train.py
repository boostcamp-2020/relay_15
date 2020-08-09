# -*- coding:utf-8 -*-

# https://github.com/doljae/relay_15
import collections
import os
import re


import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sn
import sklearn.metrics as metrics
from nltk.corpus import stopwords
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report
from sklearn.naive_bayes import MultinomialNB, GaussianNB,BernoulliNB
from collections import Counter
from konlpy.tag import Komoran
from sklearn.model_selection import StratifiedKFold
from sklearn.model_selection import KFold, cross_val_score
import pickle
from sklearn.externals import joblib
# from pyarrow import csv

# 전처리한 dataset을 import
df1 = pd.read_csv("train5.csv")
df2 = pd.read_csv("test5.csv")
df3 = pd.read_csv("reslt5.csv")
final_result=[df1,df2,df3]

# import한 데이터를 한 개로 merge
merge_df= pd.concat(final_result, axis=0, ignore_index=True)
# 불필요한 인덱스 제거
merge_df=merge_df.drop(["content",'Unnamed: 0'],axis=1)
# print(merge_df.head())
# print(train_df.columns)


columns_list=sorted(merge_df.columns.tolist(),key=lambda x: len(x))
# print(columns_list)

# 1글자 단어는 feature로써의 사용이 불충분하다고 판단, 길이 1의 columns는 제거 한다.
# 근데 이 부분은 안해도 됨. 안 했을때가 오히려 정확도는 1퍼센트 높았다
print("feature 정제중")
for column in columns_list:
    if len(column)<2:
       merge_df=merge_df.drop([column], axis=1)
print("feature 정제완료")

# 최종 사용할 feature list를 txt 파일로 저장
print(merge_df.columns.tolist())
temp1=" ".join(merge_df.columns.tolist())
f=open("col_list_final3.txt","w")
f.write(temp1)
f.close()


print("train test 분리중")
train=merge_df.drop(["label"],axis=1)
test=merge_df["label"]
# test_x=test_df.drop(["label"],axis=1)
# test_y=test_df["label"]
print("train test 분리완료")

# 모델 선언 및 정확도 테스팅
classifier1 = MultinomialNB()
skf = StratifiedKFold(n_splits=10, shuffle=True, random_state=2020)
score=cross_val_score(classifier1,train, test, cv=skf)
print("평균 정확도")
print(score)
print(score.mean())

print("학습 시작")
classifier1.fit(train,test)
print("학습 종료")
# classifier2 = GaussianNB()
# skf = StratifiedKFold(n_splits=10, shuffle=True, random_state=2020)
# score=cross_val_score(classifier2,train, test, cv=skf)
# print(score)
# print(score.mean())
#
# classifier3 = BernoulliNB()
# skf = StratifiedKFold(n_splits=10, shuffle=True, random_state=2020)
# score=cross_val_score(classifier3,train, test, cv=skf)
# print(score)
# print(score.mean())
# print(len(train.columns.tolist()))
# print(len(string_to_list(str1)))

# 생성된 모델을 pkl 파일로 저장
joblib.dump(classifier1,"nb_classifier5.pkl")

# print("욕설이다 -->1  욕설이 아니다 --> 0")
# s1=""
# while s1!="end":
#     print("테스트 케이스 입력")
#     s1=input()
#     print("입력문장: "+s1)
#     print("예측결과: "+str(classifier1.predict([string_to_list(s1)])))


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
# print("입력문장: "+str7)
# print(classifier1.predict([string_to_list(str7)]))