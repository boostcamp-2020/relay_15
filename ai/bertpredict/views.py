from rest_framework import viewsets, status
from .models import BertPredict
from .serializer import BertPredictSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# import torch
# from torch import nn
# import torch.nn.functional as F
# import torch.optim as optim
# from torch.utils.data import Dataset, DataLoader
# import gluonnlp as nlp
# import numpy as np
# # from tqdm.notebook import tqdm

# from kobert.utils import get_tokenizer
# from kobert.pytorch_kobert import get_pytorch_kobert_model

# from transformers import AdamW
# from transformers.optimization import WarmupLinearSchedule

# class BERTClassifier(nn.Module):
#     def __init__(self,
#                  bert,
#                  hidden_size = 768,
#                  num_classes=2,
#                  dr_rate=None,
#                  params=None):
#         super(BERTClassifier, self).__init__()
#         self.bert = bert
#         self.dr_rate = dr_rate
                 
#         self.classifier = nn.Linear(hidden_size , num_classes)
#         if dr_rate:
#             self.dropout = nn.Dropout(p=dr_rate)
    
#     def gen_attention_mask(self, token_ids, valid_length):
#         attention_mask = torch.zeros_like(token_ids)
#         for i, v in enumerate(valid_length):
#             attention_mask[i][:v] = 1
#         return attention_mask.float()

#     def forward(self, token_ids, valid_length, segment_ids):
#         attention_mask = self.gen_attention_mask(token_ids, valid_length)
        
#         _, pooler = self.bert(input_ids = token_ids, token_type_ids = segment_ids.long(), attention_mask = attention_mask.float().to(token_ids.device))
#         if self.dr_rate:
#             out = self.dropout(pooler)
#         return self.classifier(out)

# class BERTDataset(Dataset):
#     def __init__(self, dataset, sent_idx, label_idx, bert_tokenizer, max_len,
#                  pad, pair):
#         transform = nlp.data.BERTSentenceTransform(
#             bert_tokenizer, max_seq_length=max_len, pad=pad, pair=pair)

#         self.sentences = [transform([dataset])];
#         self.labels = [np.int32(label_idx)];

#     def __getitem__(self, i):
#         return (self.sentences[i] + (self.labels[i], ))

#     def __len__(self):
#         return (len(self.labels))

# def calc_accuracy(X,Y):
#     max_vals, max_indices = torch.max(X, 1)
#     train_acc = (max_indices == Y).sum().data.cpu().numpy()/max_indices.size()[0]
#     return train_acc

class BertPredictView(APIView):
    queryset = BertPredict.objects.all()
    serializer_class = BertPredictSerializer

    # bertmodel, vocab = get_pytorch_kobert_model()

    # tokenizer = get_tokenizer()
    # tok = nlp.data.BERTSPTokenizer(tokenizer, vocab, lower=False)

    # model = torch.load('./test.model')

    def get(self, request):
        return Response(request.data, status=200)

    def post(self, request):
        # str = request.data['checktext']

        # test_dataloader = torch.utils.data.DataLoader(BERTDataset(str,0,1,tok,64,True,False), batch_size=64, num_workers=5)

        # train_acc = 0.0
        test_acc = 0.0

        # model.eval()
        # for batch_id, (token_ids, valid_length, segment_ids, label) in enumerate(test_dataloader):
        #     token_ids = token_ids.long()
        #     segment_ids = segment_ids.long()
        #     valid_length= valid_length
        #     label = label.long()
        #     out = model(token_ids, valid_length, segment_ids)
        #     test_acc += calc_accuracy(out, label)
        #     # print(test_acc)

        return Response(data={"Result":test_acc}, status=status.HTTP_200_OK)