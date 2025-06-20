PGDMP         '                }            Internet-new-shop    15.6    15.6 N    Z           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            [           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            \           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ]           1262    26671    Internet-new-shop    DATABASE     �   CREATE DATABASE "Internet-new-shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
 #   DROP DATABASE "Internet-new-shop";
                postgres    false            �            1259    26786    Bank    TABLE     g   CREATE TABLE public."Bank" (
    "bankId" integer NOT NULL,
    name character varying(60) NOT NULL
);
    DROP TABLE public."Bank";
       public         heap    postgres    false            �            1259    26785    Bank_bankId_seq    SEQUENCE     �   CREATE SEQUENCE public."Bank_bankId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Bank_bankId_seq";
       public          postgres    false    225            ^           0    0    Bank_bankId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Bank_bankId_seq" OWNED BY public."Bank"."bankId";
          public          postgres    false    224            �            1259    26672    Basket    TABLE     a   CREATE TABLE public."Basket" (
    "userId" integer NOT NULL,
    "basketId" integer NOT NULL
);
    DROP TABLE public."Basket";
       public         heap    postgres    false            �            1259    26675    Basket_Item    TABLE     �   CREATE TABLE public."Basket_Item" (
    "basketId" integer NOT NULL,
    "itemId" integer NOT NULL,
    "basketInItemId" integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL
);
 !   DROP TABLE public."Basket_Item";
       public         heap    postgres    false            �            1259    26679    Basket_Item_basketInItemId_seq    SEQUENCE     �   CREATE SEQUENCE public."Basket_Item_basketInItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."Basket_Item_basketInItemId_seq";
       public          postgres    false    215            _           0    0    Basket_Item_basketInItemId_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."Basket_Item_basketInItemId_seq" OWNED BY public."Basket_Item"."basketInItemId";
          public          postgres    false    216            �            1259    26680    Basket_basketId_seq    SEQUENCE     �   CREATE SEQUENCE public."Basket_basketId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Basket_basketId_seq";
       public          postgres    false    214            `           0    0    Basket_basketId_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Basket_basketId_seq" OWNED BY public."Basket"."basketId";
          public          postgres    false    217            �            1259    26800 
   CreditCard    TABLE     2  CREATE TABLE public."CreditCard" (
    "creditCardId" integer NOT NULL,
    "ownerName" character varying(60) NOT NULL,
    balance numeric(10,2) NOT NULL,
    "cardNum" integer NOT NULL,
    "expirationDate" date NOT NULL,
    "cvcCode" integer NOT NULL,
    "bankId" integer,
    "currencyId" integer
);
     DROP TABLE public."CreditCard";
       public         heap    postgres    false            �            1259    26799    CreditCard_creditCardId_seq    SEQUENCE     �   CREATE SEQUENCE public."CreditCard_creditCardId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."CreditCard_creditCardId_seq";
       public          postgres    false    229            a           0    0    CreditCard_creditCardId_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."CreditCard_creditCardId_seq" OWNED BY public."CreditCard"."creditCardId";
          public          postgres    false    228            �            1259    26793    Currency    TABLE     �   CREATE TABLE public."Currency" (
    "currencyId" integer NOT NULL,
    name character varying(40) NOT NULL,
    exchange_rate numeric(10,2) NOT NULL
);
    DROP TABLE public."Currency";
       public         heap    postgres    false            �            1259    26792    Currency_currencyId_seq    SEQUENCE     �   CREATE SEQUENCE public."Currency_currencyId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Currency_currencyId_seq";
       public          postgres    false    227            b           0    0    Currency_currencyId_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."Currency_currencyId_seq" OWNED BY public."Currency"."currencyId";
          public          postgres    false    226            �            1259    26681    Item    TABLE     �   CREATE TABLE public."Item" (
    "itemId" integer NOT NULL,
    name character varying(60) NOT NULL,
    price numeric(10,2) NOT NULL,
    description text NOT NULL,
    img character varying(255) NOT NULL,
    quantity integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."Item";
       public         heap    postgres    false            �            1259    26687    Item_itemId_seq    SEQUENCE     �   CREATE SEQUENCE public."Item_itemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Item_itemId_seq";
       public          postgres    false    218            c           0    0    Item_itemId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Item_itemId_seq" OWNED BY public."Item"."itemId";
          public          postgres    false    219            �            1259    26774    Transaction    TABLE     �   CREATE TABLE public."Transaction" (
    "transactionId" integer NOT NULL,
    date date NOT NULL,
    "moneySum" numeric(10,2) NOT NULL,
    "basketId" integer
);
 !   DROP TABLE public."Transaction";
       public         heap    postgres    false            �            1259    26817    TransactionList    TABLE     �   CREATE TABLE public."TransactionList" (
    "listId" integer NOT NULL,
    "transactionId" integer,
    "creditCardId" integer
);
 %   DROP TABLE public."TransactionList";
       public         heap    postgres    false            �            1259    26816    TransactionList_listId_seq    SEQUENCE     �   CREATE SEQUENCE public."TransactionList_listId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."TransactionList_listId_seq";
       public          postgres    false    231            d           0    0    TransactionList_listId_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."TransactionList_listId_seq" OWNED BY public."TransactionList"."listId";
          public          postgres    false    230            �            1259    26773    Transaction_transactionId_seq    SEQUENCE     �   CREATE SEQUENCE public."Transaction_transactionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."Transaction_transactionId_seq";
       public          postgres    false    223            e           0    0    Transaction_transactionId_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."Transaction_transactionId_seq" OWNED BY public."Transaction"."transactionId";
          public          postgres    false    222            �            1259    26696    User    TABLE     �   CREATE TABLE public."User" (
    "userId" integer NOT NULL,
    username character varying(60) NOT NULL,
    password character varying(100) NOT NULL,
    role character varying(40) NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false            �            1259    26699    User_userId_seq    SEQUENCE     �   CREATE SEQUENCE public."User_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."User_userId_seq";
       public          postgres    false    220            f           0    0    User_userId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."User_userId_seq" OWNED BY public."User"."userId";
          public          postgres    false    221            �           2604    26789    Bank bankId    DEFAULT     p   ALTER TABLE ONLY public."Bank" ALTER COLUMN "bankId" SET DEFAULT nextval('public."Bank_bankId_seq"'::regclass);
 >   ALTER TABLE public."Bank" ALTER COLUMN "bankId" DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    26700    Basket basketId    DEFAULT     x   ALTER TABLE ONLY public."Basket" ALTER COLUMN "basketId" SET DEFAULT nextval('public."Basket_basketId_seq"'::regclass);
 B   ALTER TABLE public."Basket" ALTER COLUMN "basketId" DROP DEFAULT;
       public          postgres    false    217    214            �           2604    26701    Basket_Item basketInItemId    DEFAULT     �   ALTER TABLE ONLY public."Basket_Item" ALTER COLUMN "basketInItemId" SET DEFAULT nextval('public."Basket_Item_basketInItemId_seq"'::regclass);
 M   ALTER TABLE public."Basket_Item" ALTER COLUMN "basketInItemId" DROP DEFAULT;
       public          postgres    false    216    215            �           2604    26803    CreditCard creditCardId    DEFAULT     �   ALTER TABLE ONLY public."CreditCard" ALTER COLUMN "creditCardId" SET DEFAULT nextval('public."CreditCard_creditCardId_seq"'::regclass);
 J   ALTER TABLE public."CreditCard" ALTER COLUMN "creditCardId" DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    26796    Currency currencyId    DEFAULT     �   ALTER TABLE ONLY public."Currency" ALTER COLUMN "currencyId" SET DEFAULT nextval('public."Currency_currencyId_seq"'::regclass);
 F   ALTER TABLE public."Currency" ALTER COLUMN "currencyId" DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    26702    Item itemId    DEFAULT     p   ALTER TABLE ONLY public."Item" ALTER COLUMN "itemId" SET DEFAULT nextval('public."Item_itemId_seq"'::regclass);
 >   ALTER TABLE public."Item" ALTER COLUMN "itemId" DROP DEFAULT;
       public          postgres    false    219    218            �           2604    26777    Transaction transactionId    DEFAULT     �   ALTER TABLE ONLY public."Transaction" ALTER COLUMN "transactionId" SET DEFAULT nextval('public."Transaction_transactionId_seq"'::regclass);
 L   ALTER TABLE public."Transaction" ALTER COLUMN "transactionId" DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    26820    TransactionList listId    DEFAULT     �   ALTER TABLE ONLY public."TransactionList" ALTER COLUMN "listId" SET DEFAULT nextval('public."TransactionList_listId_seq"'::regclass);
 I   ALTER TABLE public."TransactionList" ALTER COLUMN "listId" DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    26705    User userId    DEFAULT     p   ALTER TABLE ONLY public."User" ALTER COLUMN "userId" SET DEFAULT nextval('public."User_userId_seq"'::regclass);
 >   ALTER TABLE public."User" ALTER COLUMN "userId" DROP DEFAULT;
       public          postgres    false    221    220            Q          0    26786    Bank 
   TABLE DATA           0   COPY public."Bank" ("bankId", name) FROM stdin;
    public          postgres    false    225   	^       F          0    26672    Basket 
   TABLE DATA           8   COPY public."Basket" ("userId", "basketId") FROM stdin;
    public          postgres    false    214   &^       G          0    26675    Basket_Item 
   TABLE DATA           Y   COPY public."Basket_Item" ("basketId", "itemId", "basketInItemId", quantity) FROM stdin;
    public          postgres    false    215   �^       U          0    26800 
   CreditCard 
   TABLE DATA           �   COPY public."CreditCard" ("creditCardId", "ownerName", balance, "cardNum", "expirationDate", "cvcCode", "bankId", "currencyId") FROM stdin;
    public          postgres    false    229   �^       S          0    26793    Currency 
   TABLE DATA           G   COPY public."Currency" ("currencyId", name, exchange_rate) FROM stdin;
    public          postgres    false    227   �^       J          0    26681    Item 
   TABLE DATA           S   COPY public."Item" ("itemId", name, price, description, img, quantity) FROM stdin;
    public          postgres    false    218   �^       O          0    26774    Transaction 
   TABLE DATA           V   COPY public."Transaction" ("transactionId", date, "moneySum", "basketId") FROM stdin;
    public          postgres    false    223   Lb       W          0    26817    TransactionList 
   TABLE DATA           V   COPY public."TransactionList" ("listId", "transactionId", "creditCardId") FROM stdin;
    public          postgres    false    231   ib       L          0    26696    User 
   TABLE DATA           D   COPY public."User" ("userId", username, password, role) FROM stdin;
    public          postgres    false    220   �b       g           0    0    Bank_bankId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Bank_bankId_seq"', 1, false);
          public          postgres    false    224            h           0    0    Basket_Item_basketInItemId_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."Basket_Item_basketInItemId_seq"', 266, true);
          public          postgres    false    216            i           0    0    Basket_basketId_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Basket_basketId_seq"', 29, true);
          public          postgres    false    217            j           0    0    CreditCard_creditCardId_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."CreditCard_creditCardId_seq"', 1, false);
          public          postgres    false    228            k           0    0    Currency_currencyId_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Currency_currencyId_seq"', 1, false);
          public          postgres    false    226            l           0    0    Item_itemId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Item_itemId_seq"', 23, true);
          public          postgres    false    219            m           0    0    TransactionList_listId_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."TransactionList_listId_seq"', 1, false);
          public          postgres    false    230            n           0    0    Transaction_transactionId_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."Transaction_transactionId_seq"', 1, false);
          public          postgres    false    222            o           0    0    User_userId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."User_userId_seq"', 29, true);
          public          postgres    false    221            �           2606    26791    Bank Bank_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Bank"
    ADD CONSTRAINT "Bank_pkey" PRIMARY KEY ("bankId");
 <   ALTER TABLE ONLY public."Bank" DROP CONSTRAINT "Bank_pkey";
       public            postgres    false    225            �           2606    26707    Basket_Item Basket_Item_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Basket_Item"
    ADD CONSTRAINT "Basket_Item_pkey" PRIMARY KEY ("basketId", "itemId", "basketInItemId");
 J   ALTER TABLE ONLY public."Basket_Item" DROP CONSTRAINT "Basket_Item_pkey";
       public            postgres    false    215    215    215            �           2606    26709    Basket Basket_basketId_key 
   CONSTRAINT     _   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_basketId_key" UNIQUE ("basketId");
 H   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_basketId_key";
       public            postgres    false    214            �           2606    26711    Basket Basket_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_pkey" PRIMARY KEY ("basketId", "userId");
 @   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_pkey";
       public            postgres    false    214    214            �           2606    26713    Basket Basket_userId_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_userId_key" UNIQUE ("userId");
 F   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_userId_key";
       public            postgres    false    214            �           2606    26805    CreditCard CreditCard_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("creditCardId");
 H   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_pkey";
       public            postgres    false    229            �           2606    26798    Currency Currency_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Currency"
    ADD CONSTRAINT "Currency_pkey" PRIMARY KEY ("currencyId");
 D   ALTER TABLE ONLY public."Currency" DROP CONSTRAINT "Currency_pkey";
       public            postgres    false    227            �           2606    26715    Item Item_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId");
 <   ALTER TABLE ONLY public."Item" DROP CONSTRAINT "Item_pkey";
       public            postgres    false    218            �           2606    26822 $   TransactionList TransactionList_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_pkey" PRIMARY KEY ("listId");
 R   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_pkey";
       public            postgres    false    231            �           2606    26779    Transaction Transaction_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionId");
 J   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_pkey";
       public            postgres    false    223            �           2606    26723    User User_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    220            �           2606    26725    User User_username_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_username_key" UNIQUE (username);
 D   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_username_key";
       public            postgres    false    220            �           2606    26726 %   Basket_Item Basket_Item_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Basket_Item"
    ADD CONSTRAINT "Basket_Item_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public."Basket"("basketId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 S   ALTER TABLE ONLY public."Basket_Item" DROP CONSTRAINT "Basket_Item_basketId_fkey";
       public          postgres    false    3225    215    214            �           2606    26731    Basket Basket_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"("userId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_userId_fkey";
       public          postgres    false    3235    214    220            �           2606    26806 !   CreditCard CreditCard_bankId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES public."Bank"("bankId") ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_bankId_fkey";
       public          postgres    false    3241    229    225            �           2606    26811 %   CreditCard CreditCard_currencyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES public."Currency"("currencyId") ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_currencyId_fkey";
       public          postgres    false    229    3243    227            �           2606    26828 1   TransactionList TransactionList_creditCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES public."CreditCard"("creditCardId") ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_creditCardId_fkey";
       public          postgres    false    231    3245    229            �           2606    26823 2   TransactionList TransactionList_transactionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES public."Transaction"("transactionId") ON UPDATE CASCADE ON DELETE SET NULL;
 `   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_transactionId_fkey";
       public          postgres    false    231    3239    223            �           2606    26780 %   Transaction Transaction_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public."Basket"("basketId") ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_basketId_fkey";
       public          postgres    false    3225    214    223            �           2606    26746    Basket_Item item    FK CONSTRAINT     �   ALTER TABLE ONLY public."Basket_Item"
    ADD CONSTRAINT item FOREIGN KEY ("itemId") REFERENCES public."Item"("itemId") ON UPDATE CASCADE ON DELETE CASCADE;
 <   ALTER TABLE ONLY public."Basket_Item" DROP CONSTRAINT item;
       public          postgres    false    3233    215    218            Q      x������ � �      F   P   x��I1 �����w}q	����Sw�u�Ug��H5Z���7�e�YVXe�]N8�[G�	O1X�Fo������^��      G      x������ � �      U      x������ � �      S      x������ � �      J   _  x��T[n7��bP
|?���)��,�qҦ�
�H� ���Q�H�gG=��my#��h������s/7��]�e7��ˁ���1R�)�rSv�P6mٶ�o���0�!p?�ߜ�T޹�I;-UY��s�em��-�<��h�nI�;��e9\�Ë�9�\!�`K䛈�{�ޖ�w��C9��OeU6��޶|l����?����c�{��>+b����$��T	��G*˼�k&��6\��)���e?\ԋ���H�ޓ���hx��� W����ڦ�;;�hI�)�`9MAC4��W4BC+��!葉�ᒔߐe�<φb�P�x�{<��خO�^�r������5�d`�B��ˢ�#"�� �W�����q;*�l��ጱ�L��5�/o�A�tA��S�98�������39��G7i�-o8n�~,��g��
�?��pGk�9]mk	���֣i�#�qr��1Ug�eY8{�_sV��J�*��.�`��;A�ь:�����ƺ�ps��i��t/�kp�w]Um����U]2�9�h6�����g��iT�,7!y��kXzl�=Tڠ���/h�󹽅��-�`yZ���Qn�eX��,O�$��pTu��^��v}N�����4�U�j��Z�k��:uj��8������*zb�Ϗ%���S�Rmyx&{%�J	��	�C1��_tܭ�o�qFl�!��;�WR��eb)�-՘�T������b)�G��Qߨ:#��yupv�l������ov {y�af��!�L���l�Z9�M:��h�#@5B�Z�[��������x�zIOU�xd�/0Ge�G��6�J>�]���b���sw�~�h��{ޟ�      O      x������ � �      W      x������ � �      L   t  x�]�Ɏ�F�3�9̙�`�66`�fv��l0`V�I��!ϐK�Q�Q&���7Jw�8��DUI���_U4�8~|���������w��_������������������>�߿C�w�pu��)�|s���� sqÊ`��
c��\r����CD�ΐe�vO�?�jo����ę.	�R���p���t�V��=�/�>�r��ݝ���̒]��S�w���&i��^�����)f殩����OG�0W�5�P�f��0�
�探��������i�{�����(>?x,��j"kցk�mGe����W�?��p6�F�AUVޓ�N�XN�'���l��J�,;�(�ť�@fȡi12T�y�
Tur(�Fz�l��ܔ�,�/PbB�x�ƚ��^�'�mi~��ĕgאߪ�1kW�'*u
<4��th��lB7��6.Yi��WuF����j�/�]��%�iB�$��@3$�����s(����{����tb�ua�vK�,Z�'�X�R�y/�6>X��p�u�'gg!�s�x��b�����of�L�Wn�pӐ��7�'�$"5�}��kt3�KN�P%/��gY��H�D�|�y���W�]�d�&NޯA�	]iJ+K��>�g�M��T4����BM��n�#jME[X�h2e�@���E���Vkdq�ԁ��TP�C��$a����4����'��%����8�m"q/nH �\Z�����V�^�A0Y8T<��3�ʝ%�N��VL.g��F�EҢ4Q�9΍o�Kqpפ�O��w�8�4*��]�v���|�%Z�u������8�Uy�[V3�y�f��Q�TȜ#�pA��Ӂ����
���ƪ������B�W���]Ũ��4�����!�K>RG쏗��j\���l4E���Ԫ7A1��Y�\��D��=ñ��\y�/xGnAY���;Q%�Oj]?p�Bl����Z���(!OB�޵�P�@[�2
^�D�	ld��b��*>�i"=���6���-�S��b�Q*�q'i(�	Ҍ��d����i����	��C��	˲S}��wܞd,|]��i��+dU��0^�MӔ2�w1F)���ZV^_{W�
n�L���@ �!+D�/b���~zz���(�     