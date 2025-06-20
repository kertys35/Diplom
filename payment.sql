PGDMP     ;    &                }            Internet-payment    15.6    15.6                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    26751    Internet-payment    DATABASE     �   CREATE DATABASE "Internet-payment" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
 "   DROP DATABASE "Internet-payment";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    26752    Transaction    TABLE     �   CREATE TABLE public."Transaction" (
    "transactionId" integer NOT NULL,
    date date NOT NULL,
    "basketId" integer,
    "moneySum" numeric(10,2) NOT NULL
);
 !   DROP TABLE public."Transaction";
       public         heap    postgres    false    4            �            1259    26755    TransactionList    TABLE     �   CREATE TABLE public."TransactionList" (
    "listId" integer NOT NULL,
    "transactionId" integer NOT NULL,
    "creditCardId" integer NOT NULL
);
 %   DROP TABLE public."TransactionList";
       public         heap    postgres    false    4            �            1259    26758    TransactionList_listId_seq    SEQUENCE     �   CREATE SEQUENCE public."TransactionList_listId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."TransactionList_listId_seq";
       public          postgres    false    4    215                       0    0    TransactionList_listId_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."TransactionList_listId_seq" OWNED BY public."TransactionList"."listId";
          public          postgres    false    216            �            1259    26759    Transaction_transactionId_seq    SEQUENCE     �   CREATE SEQUENCE public."Transaction_transactionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."Transaction_transactionId_seq";
       public          postgres    false    4    214                       0    0    Transaction_transactionId_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."Transaction_transactionId_seq" OWNED BY public."Transaction"."transactionId";
          public          postgres    false    217            j           2604    26760    Transaction transactionId    DEFAULT     �   ALTER TABLE ONLY public."Transaction" ALTER COLUMN "transactionId" SET DEFAULT nextval('public."Transaction_transactionId_seq"'::regclass);
 L   ALTER TABLE public."Transaction" ALTER COLUMN "transactionId" DROP DEFAULT;
       public          postgres    false    217    214            k           2604    26761    TransactionList listId    DEFAULT     �   ALTER TABLE ONLY public."TransactionList" ALTER COLUMN "listId" SET DEFAULT nextval('public."TransactionList_listId_seq"'::regclass);
 I   ALTER TABLE public."TransactionList" ALTER COLUMN "listId" DROP DEFAULT;
       public          postgres    false    216    215                      0    26752    Transaction 
   TABLE DATA           V   COPY public."Transaction" ("transactionId", date, "basketId", "moneySum") FROM stdin;
    public          postgres    false    214   d                 0    26755    TransactionList 
   TABLE DATA           V   COPY public."TransactionList" ("listId", "transactionId", "creditCardId") FROM stdin;
    public          postgres    false    215   �                  0    0    TransactionList_listId_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."TransactionList_listId_seq"', 66, true);
          public          postgres    false    216                       0    0    Transaction_transactionId_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."Transaction_transactionId_seq"', 69, true);
          public          postgres    false    217            q           2606    26763 $   TransactionList TransactionList_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_pkey" PRIMARY KEY ("listId", "transactionId", "creditCardId");
 R   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_pkey";
       public            postgres    false    215    215    215            m           2606    26765    Transaction Transaction_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionId");
 J   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_pkey";
       public            postgres    false    214            o           2606    26767 )   Transaction Transaction_transactionId_key 
   CONSTRAINT     s   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_transactionId_key" UNIQUE ("transactionId");
 W   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_transactionId_key";
       public            postgres    false    214            r           2606    26768 2   TransactionList TransactionList_transactionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES public."Transaction"("transactionId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 `   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_transactionId_fkey";
       public          postgres    false    214    215    3181                 x�u�Q�� �ﺗi��^������F��:��j�����?>�Z�Yk��8ч��%qM��]�Zh��ձU۪���;�=�̿
#+t���>վLX`�ӬxsZ��Xo�K�
��ܓ����>�A��	�[��_�0q8&���8�b�p���1�rI�
�Ǽ�7�'y��"�7�'�W#o��f?t�(JP�u����}?ܟY�-Ƚ��� �}R�8��q�Zp����_���{M���[Ⓒ����;�?�݀�Y�$L|=O�������n�         �   x����1�b��S|�����q�b� z�b"O�2'�ƛ�ć����Q�'odˊّ+I=q�oI�#��D*W"%���Hd%bO���C�R�����=��!e){H�C�R����H{O���h{H�C��Z\�������=d<2�χ�=d�!��!co3�����{+����q�}X\����s��Q=�     