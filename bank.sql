PGDMP         '                }            Internet-bank    15.6    15.6                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    26637    Internet-bank    DATABASE     �   CREATE DATABASE "Internet-bank" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Internet-bank";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    26638    Bank    TABLE     g   CREATE TABLE public."Bank" (
    "bankId" integer NOT NULL,
    name character varying(60) NOT NULL
);
    DROP TABLE public."Bank";
       public         heap    postgres    false    4            �            1259    26641    Bank_bankId_seq    SEQUENCE     �   CREATE SEQUENCE public."Bank_bankId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Bank_bankId_seq";
       public          postgres    false    4    214                       0    0    Bank_bankId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Bank_bankId_seq" OWNED BY public."Bank"."bankId";
          public          postgres    false    215            �            1259    26642 
   CreditCard    TABLE     :  CREATE TABLE public."CreditCard" (
    "creditCardId" integer NOT NULL,
    "bankId" integer NOT NULL,
    "ownerName" character varying(60) NOT NULL,
    balance numeric(10,2) NOT NULL,
    "cardNum" bigint NOT NULL,
    "expirationDate" date NOT NULL,
    "cvcCode" integer NOT NULL,
    "currencyId" integer
);
     DROP TABLE public."CreditCard";
       public         heap    postgres    false    4            �            1259    26645    CreditCard_creditCardId_seq    SEQUENCE     �   CREATE SEQUENCE public."CreditCard_creditCardId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."CreditCard_creditCardId_seq";
       public          postgres    false    216    4                       0    0    CreditCard_creditCardId_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."CreditCard_creditCardId_seq" OWNED BY public."CreditCard"."creditCardId";
          public          postgres    false    217            �            1259    26646    Currency    TABLE     �   CREATE TABLE public."Currency" (
    "currencyId" integer NOT NULL,
    name character varying(40) NOT NULL,
    exchange_rate numeric(10,2) NOT NULL
);
    DROP TABLE public."Currency";
       public         heap    postgres    false    4            �            1259    26649    Currency_currencyId_seq    SEQUENCE     �   CREATE SEQUENCE public."Currency_currencyId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Currency_currencyId_seq";
       public          postgres    false    4    218                       0    0    Currency_currencyId_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."Currency_currencyId_seq" OWNED BY public."Currency"."currencyId";
          public          postgres    false    219            o           2604    26650    Bank bankId    DEFAULT     p   ALTER TABLE ONLY public."Bank" ALTER COLUMN "bankId" SET DEFAULT nextval('public."Bank_bankId_seq"'::regclass);
 >   ALTER TABLE public."Bank" ALTER COLUMN "bankId" DROP DEFAULT;
       public          postgres    false    215    214            p           2604    26651    CreditCard creditCardId    DEFAULT     �   ALTER TABLE ONLY public."CreditCard" ALTER COLUMN "creditCardId" SET DEFAULT nextval('public."CreditCard_creditCardId_seq"'::regclass);
 J   ALTER TABLE public."CreditCard" ALTER COLUMN "creditCardId" DROP DEFAULT;
       public          postgres    false    217    216            q           2604    26652    Currency currencyId    DEFAULT     �   ALTER TABLE ONLY public."Currency" ALTER COLUMN "currencyId" SET DEFAULT nextval('public."Currency_currencyId_seq"'::regclass);
 F   ALTER TABLE public."Currency" ALTER COLUMN "currencyId" DROP DEFAULT;
       public          postgres    false    219    218            
          0    26638    Bank 
   TABLE DATA           0   COPY public."Bank" ("bankId", name) FROM stdin;
    public          postgres    false    214   #"                 0    26642 
   CreditCard 
   TABLE DATA           �   COPY public."CreditCard" ("creditCardId", "bankId", "ownerName", balance, "cardNum", "expirationDate", "cvcCode", "currencyId") FROM stdin;
    public          postgres    false    216   �"                 0    26646    Currency 
   TABLE DATA           G   COPY public."Currency" ("currencyId", name, exchange_rate) FROM stdin;
    public          postgres    false    218   9#                  0    0    Bank_bankId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Bank_bankId_seq"', 26, true);
          public          postgres    false    215                       0    0    CreditCard_creditCardId_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."CreditCard_creditCardId_seq"', 5, true);
          public          postgres    false    217                       0    0    Currency_currencyId_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Currency_currencyId_seq"', 7, true);
          public          postgres    false    219            s           2606    26654    Bank Bank_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Bank"
    ADD CONSTRAINT "Bank_pkey" PRIMARY KEY ("bankId");
 <   ALTER TABLE ONLY public."Bank" DROP CONSTRAINT "Bank_pkey";
       public            postgres    false    214            u           2606    26656 &   CreditCard CreditCard_creditCardId_key 
   CONSTRAINT     o   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_creditCardId_key" UNIQUE ("creditCardId");
 T   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_creditCardId_key";
       public            postgres    false    216            w           2606    26658    CreditCard CreditCard_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("creditCardId", "bankId");
 H   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_pkey";
       public            postgres    false    216    216            y           2606    26660    Currency Currency_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Currency"
    ADD CONSTRAINT "Currency_pkey" PRIMARY KEY ("currencyId");
 D   ALTER TABLE ONLY public."Currency" DROP CONSTRAINT "Currency_pkey";
       public            postgres    false    218            z           2606    26661 !   CreditCard CreditCard_bankId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES public."Bank"("bankId") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_bankId_fkey";
       public          postgres    false    216    3187    214            {           2606    26666 %   CreditCard CreditCard_currencyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES public."Currency"("currencyId") ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
 S   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_currencyId_fkey";
       public          postgres    false    216    3193    218            
   N   x�3估���[/6 ��^��e�ya��}/6^�za�Ş���]��6�0,�ra�PQ���=... p�7
         �   x���;�@Dk�)rV�כ�ޅ�@EKI�!@����# `�Ō�y!!���=.�VOQ���)�yf�є�ƉȄ�D�3R�g�8�[�~���_v��l,��s,$��b��I��?H�F�E2ºve��Sn����oq�y�I��@y4����9wG��         {   x�-�K
�@D�ݧ����w�0	ٺt/@�PCr��7r�V��UE��=O&?I���+GK����7�����,r(��4	���[�'��6�9{[�w����w�����MU�=IC�     