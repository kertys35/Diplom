PGDMP     2    '                }            Internet-shop    15.6    15.6 R    ^           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            _           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            `           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            a           1262    26117    Internet-shop    DATABASE     �   CREATE DATABASE "Internet-shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Internet-shop";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            b           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    26198    Bank    TABLE     g   CREATE TABLE public."Bank" (
    "bankId" integer NOT NULL,
    name character varying(60) NOT NULL
);
    DROP TABLE public."Bank";
       public         heap    postgres    false    4            �            1259    26197    Bank_bankId_seq    SEQUENCE     �   CREATE SEQUENCE public."Bank_bankId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Bank_bankId_seq";
       public          postgres    false    4    223            c           0    0    Bank_bankId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Bank_bankId_seq" OWNED BY public."Bank"."bankId";
          public          postgres    false    222            �            1259    26123    Basket    TABLE     a   CREATE TABLE public."Basket" (
    "userId" integer NOT NULL,
    "basketId" integer NOT NULL
);
    DROP TABLE public."Basket";
       public         heap    postgres    false    4            �            1259    26179    Basket_Item    TABLE     �   CREATE TABLE public."Basket_Item" (
    "basketId" integer NOT NULL,
    "itemId" integer NOT NULL,
    "basketInItemId" integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL
);
 !   DROP TABLE public."Basket_Item";
       public         heap    postgres    false    4            �            1259    26178    Basket_Item_basketInItemId_seq    SEQUENCE     �   CREATE SEQUENCE public."Basket_Item_basketInItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."Basket_Item_basketInItemId_seq";
       public          postgres    false    221    4            d           0    0    Basket_Item_basketInItemId_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."Basket_Item_basketInItemId_seq" OWNED BY public."Basket_Item"."basketInItemId";
          public          postgres    false    220            �            1259    26159    Basket_basketId_seq    SEQUENCE     �   CREATE SEQUENCE public."Basket_basketId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Basket_basketId_seq";
       public          postgres    false    215    4            e           0    0    Basket_basketId_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Basket_basketId_seq" OWNED BY public."Basket"."basketId";
          public          postgres    false    219            �            1259    26205 
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
       public         heap    postgres    false    4            �            1259    26204    CreditCard_creditCardId_seq    SEQUENCE     �   CREATE SEQUENCE public."CreditCard_creditCardId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."CreditCard_creditCardId_seq";
       public          postgres    false    4    225            f           0    0    CreditCard_creditCardId_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."CreditCard_creditCardId_seq" OWNED BY public."CreditCard"."creditCardId";
          public          postgres    false    224            �            1259    26282    Currency    TABLE     �   CREATE TABLE public."Currency" (
    "currencyId" integer NOT NULL,
    name character varying(40) NOT NULL,
    exchange_rate numeric(10,2) NOT NULL
);
    DROP TABLE public."Currency";
       public         heap    postgres    false    4            �            1259    26281    Currency_currencyId_seq    SEQUENCE     �   CREATE SEQUENCE public."Currency_currencyId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Currency_currencyId_seq";
       public          postgres    false    230    4            g           0    0    Currency_currencyId_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."Currency_currencyId_seq" OWNED BY public."Currency"."currencyId";
          public          postgres    false    229            �            1259    26146    Item    TABLE     �   CREATE TABLE public."Item" (
    "itemId" integer NOT NULL,
    name character varying(60) NOT NULL,
    price numeric(10,2) NOT NULL,
    description text NOT NULL,
    img character varying(255) NOT NULL,
    quantity integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."Item";
       public         heap    postgres    false    4            �            1259    26145    Item_itemId_seq    SEQUENCE     �   CREATE SEQUENCE public."Item_itemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Item_itemId_seq";
       public          postgres    false    217    4            h           0    0    Item_itemId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Item_itemId_seq" OWNED BY public."Item"."itemId";
          public          postgres    false    216            �            1259    26240    Transaction    TABLE     �   CREATE TABLE public."Transaction" (
    "transactionId" integer NOT NULL,
    date date NOT NULL,
    "basketId" integer,
    "moneySum" numeric(10,2) NOT NULL
);
 !   DROP TABLE public."Transaction";
       public         heap    postgres    false    4            �            1259    26265    TransactionList    TABLE     �   CREATE TABLE public."TransactionList" (
    "listId" integer NOT NULL,
    "transactionId" integer NOT NULL,
    "creditCardId" integer NOT NULL
);
 %   DROP TABLE public."TransactionList";
       public         heap    postgres    false    4            �            1259    26608    TransactionList_listId_seq    SEQUENCE     �   CREATE SEQUENCE public."TransactionList_listId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."TransactionList_listId_seq";
       public          postgres    false    228    4            i           0    0    TransactionList_listId_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."TransactionList_listId_seq" OWNED BY public."TransactionList"."listId";
          public          postgres    false    231            �            1259    26239    Transaction_transactionId_seq    SEQUENCE     �   CREATE SEQUENCE public."Transaction_transactionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."Transaction_transactionId_seq";
       public          postgres    false    4    227            j           0    0    Transaction_transactionId_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."Transaction_transactionId_seq" OWNED BY public."Transaction"."transactionId";
          public          postgres    false    226            �            1259    26118    User    TABLE     �   CREATE TABLE public."User" (
    "userId" integer NOT NULL,
    username character varying(60) NOT NULL,
    password character varying(100) NOT NULL,
    role character varying(40) NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false    4            �            1259    26152    User_userId_seq    SEQUENCE     �   CREATE SEQUENCE public."User_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."User_userId_seq";
       public          postgres    false    214    4            k           0    0    User_userId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."User_userId_seq" OWNED BY public."User"."userId";
          public          postgres    false    218            �           2604    26201    Bank bankId    DEFAULT     p   ALTER TABLE ONLY public."Bank" ALTER COLUMN "bankId" SET DEFAULT nextval('public."Bank_bankId_seq"'::regclass);
 >   ALTER TABLE public."Bank" ALTER COLUMN "bankId" DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    26160    Basket basketId    DEFAULT     x   ALTER TABLE ONLY public."Basket" ALTER COLUMN "basketId" SET DEFAULT nextval('public."Basket_basketId_seq"'::regclass);
 B   ALTER TABLE public."Basket" ALTER COLUMN "basketId" DROP DEFAULT;
       public          postgres    false    219    215            �           2604    26182    Basket_Item basketInItemId    DEFAULT     �   ALTER TABLE ONLY public."Basket_Item" ALTER COLUMN "basketInItemId" SET DEFAULT nextval('public."Basket_Item_basketInItemId_seq"'::regclass);
 M   ALTER TABLE public."Basket_Item" ALTER COLUMN "basketInItemId" DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    26208    CreditCard creditCardId    DEFAULT     �   ALTER TABLE ONLY public."CreditCard" ALTER COLUMN "creditCardId" SET DEFAULT nextval('public."CreditCard_creditCardId_seq"'::regclass);
 J   ALTER TABLE public."CreditCard" ALTER COLUMN "creditCardId" DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    26285    Currency currencyId    DEFAULT     �   ALTER TABLE ONLY public."Currency" ALTER COLUMN "currencyId" SET DEFAULT nextval('public."Currency_currencyId_seq"'::regclass);
 F   ALTER TABLE public."Currency" ALTER COLUMN "currencyId" DROP DEFAULT;
       public          postgres    false    229    230    230            �           2604    26149    Item itemId    DEFAULT     p   ALTER TABLE ONLY public."Item" ALTER COLUMN "itemId" SET DEFAULT nextval('public."Item_itemId_seq"'::regclass);
 >   ALTER TABLE public."Item" ALTER COLUMN "itemId" DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    26243    Transaction transactionId    DEFAULT     �   ALTER TABLE ONLY public."Transaction" ALTER COLUMN "transactionId" SET DEFAULT nextval('public."Transaction_transactionId_seq"'::regclass);
 L   ALTER TABLE public."Transaction" ALTER COLUMN "transactionId" DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    26609    TransactionList listId    DEFAULT     �   ALTER TABLE ONLY public."TransactionList" ALTER COLUMN "listId" SET DEFAULT nextval('public."TransactionList_listId_seq"'::regclass);
 I   ALTER TABLE public."TransactionList" ALTER COLUMN "listId" DROP DEFAULT;
       public          postgres    false    231    228            �           2604    26153    User userId    DEFAULT     p   ALTER TABLE ONLY public."User" ALTER COLUMN "userId" SET DEFAULT nextval('public."User_userId_seq"'::regclass);
 >   ALTER TABLE public."User" ALTER COLUMN "userId" DROP DEFAULT;
       public          postgres    false    218    214            S          0    26198    Bank 
   TABLE DATA           0   COPY public."Bank" ("bankId", name) FROM stdin;
    public          postgres    false    223   Ec       K          0    26123    Basket 
   TABLE DATA           8   COPY public."Basket" ("userId", "basketId") FROM stdin;
    public          postgres    false    215   �c       Q          0    26179    Basket_Item 
   TABLE DATA           Y   COPY public."Basket_Item" ("basketId", "itemId", "basketInItemId", quantity) FROM stdin;
    public          postgres    false    221   d       U          0    26205 
   CreditCard 
   TABLE DATA           �   COPY public."CreditCard" ("creditCardId", "bankId", "ownerName", balance, "cardNum", "expirationDate", "cvcCode", "currencyId") FROM stdin;
    public          postgres    false    225   ,d       Z          0    26282    Currency 
   TABLE DATA           G   COPY public."Currency" ("currencyId", name, exchange_rate) FROM stdin;
    public          postgres    false    230   �d       M          0    26146    Item 
   TABLE DATA           S   COPY public."Item" ("itemId", name, price, description, img, quantity) FROM stdin;
    public          postgres    false    217   me       W          0    26240    Transaction 
   TABLE DATA           V   COPY public."Transaction" ("transactionId", date, "basketId", "moneySum") FROM stdin;
    public          postgres    false    227   �h       X          0    26265    TransactionList 
   TABLE DATA           V   COPY public."TransactionList" ("listId", "transactionId", "creditCardId") FROM stdin;
    public          postgres    false    228   �i       J          0    26118    User 
   TABLE DATA           D   COPY public."User" ("userId", username, password, role) FROM stdin;
    public          postgres    false    214   �j       l           0    0    Bank_bankId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Bank_bankId_seq"', 26, true);
          public          postgres    false    222            m           0    0    Basket_Item_basketInItemId_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."Basket_Item_basketInItemId_seq"', 266, true);
          public          postgres    false    220            n           0    0    Basket_basketId_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Basket_basketId_seq"', 29, true);
          public          postgres    false    219            o           0    0    CreditCard_creditCardId_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."CreditCard_creditCardId_seq"', 5, true);
          public          postgres    false    224            p           0    0    Currency_currencyId_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Currency_currencyId_seq"', 7, true);
          public          postgres    false    229            q           0    0    Item_itemId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Item_itemId_seq"', 23, true);
          public          postgres    false    216            r           0    0    TransactionList_listId_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."TransactionList_listId_seq"', 54, true);
          public          postgres    false    231            s           0    0    Transaction_transactionId_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."Transaction_transactionId_seq"', 56, true);
          public          postgres    false    226            t           0    0    User_userId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."User_userId_seq"', 29, true);
          public          postgres    false    218            �           2606    26203    Bank Bank_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Bank"
    ADD CONSTRAINT "Bank_pkey" PRIMARY KEY ("bankId");
 <   ALTER TABLE ONLY public."Bank" DROP CONSTRAINT "Bank_pkey";
       public            postgres    false    223            �           2606    26184    Basket_Item Basket_Item_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Basket_Item"
    ADD CONSTRAINT "Basket_Item_pkey" PRIMARY KEY ("basketId", "itemId", "basketInItemId");
 J   ALTER TABLE ONLY public."Basket_Item" DROP CONSTRAINT "Basket_Item_pkey";
       public            postgres    false    221    221    221            �           2606    26191    Basket Basket_basketId_key 
   CONSTRAINT     _   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_basketId_key" UNIQUE ("basketId");
 H   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_basketId_key";
       public            postgres    false    215            �           2606    26165    Basket Basket_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_pkey" PRIMARY KEY ("basketId", "userId");
 @   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_pkey";
       public            postgres    false    215    215            �           2606    26238    Basket Basket_userId_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_userId_key" UNIQUE ("userId");
 F   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_userId_key";
       public            postgres    false    215            �           2606    26262 &   CreditCard CreditCard_creditCardId_key 
   CONSTRAINT     o   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_creditCardId_key" UNIQUE ("creditCardId");
 T   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_creditCardId_key";
       public            postgres    false    225            �           2606    26210    CreditCard CreditCard_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("creditCardId", "bankId");
 H   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_pkey";
       public            postgres    false    225    225            �           2606    26287    Currency Currency_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Currency"
    ADD CONSTRAINT "Currency_pkey" PRIMARY KEY ("currencyId");
 D   ALTER TABLE ONLY public."Currency" DROP CONSTRAINT "Currency_pkey";
       public            postgres    false    230            �           2606    26151    Item Item_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId");
 <   ALTER TABLE ONLY public."Item" DROP CONSTRAINT "Item_pkey";
       public            postgres    false    217            �           2606    26614 $   TransactionList TransactionList_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_pkey" PRIMARY KEY ("listId", "transactionId", "creditCardId");
 R   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_pkey";
       public            postgres    false    228    228    228            �           2606    26245    Transaction Transaction_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionId");
 J   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_pkey";
       public            postgres    false    227            �           2606    26264 )   Transaction Transaction_transactionId_key 
   CONSTRAINT     s   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_transactionId_key" UNIQUE ("transactionId");
 W   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_transactionId_key";
       public            postgres    false    227            �           2606    26158    User User_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    214            �           2606    26316    User User_username_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_username_key" UNIQUE (username);
 D   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_username_key";
       public            postgres    false    214            �           2606    26630 %   Basket_Item Basket_Item_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Basket_Item"
    ADD CONSTRAINT "Basket_Item_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public."Basket"("basketId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 S   ALTER TABLE ONLY public."Basket_Item" DROP CONSTRAINT "Basket_Item_basketId_fkey";
       public          postgres    false    215    221    3229            �           2606    26625    Basket Basket_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Basket"
    ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"("userId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public."Basket" DROP CONSTRAINT "Basket_userId_fkey";
       public          postgres    false    215    3225    214            �           2606    26211 !   CreditCard CreditCard_bankId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES public."Bank"("bankId") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_bankId_fkey";
       public          postgres    false    225    223    3239            �           2606    26288 %   CreditCard CreditCard_currencyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CreditCard"
    ADD CONSTRAINT "CreditCard_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES public."Currency"("currencyId") ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
 S   ALTER TABLE ONLY public."CreditCard" DROP CONSTRAINT "CreditCard_currencyId_fkey";
       public          postgres    false    225    3251    230            �           2606    26620 1   TransactionList TransactionList_creditCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES public."CreditCard"("creditCardId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 _   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_creditCardId_fkey";
       public          postgres    false    3241    228    225            �           2606    26615 2   TransactionList TransactionList_transactionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TransactionList"
    ADD CONSTRAINT "TransactionList_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES public."Transaction"("transactionId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 `   ALTER TABLE ONLY public."TransactionList" DROP CONSTRAINT "TransactionList_transactionId_fkey";
       public          postgres    false    228    3245    227            �           2606    26596 %   Transaction Transaction_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Transaction"
    ADD CONSTRAINT "Transaction_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public."Basket"("basketId") ON UPDATE CASCADE ON DELETE SET NULL NOT VALID;
 S   ALTER TABLE ONLY public."Transaction" DROP CONSTRAINT "Transaction_basketId_fkey";
       public          postgres    false    3229    215    227            �           2606    26185    Basket_Item item    FK CONSTRAINT     �   ALTER TABLE ONLY public."Basket_Item"
    ADD CONSTRAINT item FOREIGN KEY ("itemId") REFERENCES public."Item"("itemId") ON UPDATE CASCADE ON DELETE CASCADE;
 <   ALTER TABLE ONLY public."Basket_Item" DROP CONSTRAINT item;
       public          postgres    false    221    3235    217            S   N   x�3估���[/6 ��^��e�ya��}/6^�za�Ş���]��6�0,�ra�PQ���=... p�7
      K   P   x��I1 �����w}q	����Sw�u�Ug��H5Z���7�e�YVXe�]N8�[G�	O1X�Fo������^��      Q      x�32�42�423�4����� ec      U   �   x�����0���Y ��ٱwa�h))f�l�E@@(�+�;���lm;�ZoW�UOQ���K`D��@�)5Q���lek�<,�!�a>ƿ��N��AhN�s($f�bl��
I�ART@�6��/{��z�9
�����_^���I!O���;�nGi��      Z   {   x�-�K
�@D�ݧ����w�0	ٺt/@�PCr��7r�V��UE��=O&?I���+GK����7�����,r(��4	���[�'��6�9{[�w����w�����MU�=IC�      M   U  x��UKn#7]w�B�ɺK6�&;@V9���%� F� �� [[#e��H�y�<v�ǖ`#ɦ[d��{���M�>��2o���qQ^�5��|�����!0��ϻ�&���!�`�-���ơ 4�(3�$ө�,�Yo����Ƒ[~���n�i�oȴG��y��#�7ȿ��*ok�7��k���	^��b�t1���7�ز��md�I�t�yFj�R�`�w~hH��7���"ߢ�וk㈖�|w�7y_����UOl�\?���+�˦㱷$3^�<
 ���l�z���o�h��;����ڛ��0ۢ.6�����D��#O�8�u�KΒ��Q	F@�H*�C�д4���
^[��庲�P^�$��IS�~��@�njT���H��c�B�&#{��A7�X���Z����.��ɿ �����c��S3~%؃$$�-F��KhQ����G'5y�wV��*�C��|2V����>o�l򟳟*��VUj��$�����.<����U���t�j��O&�V��y�&�ʫE���1��r��[6Q��X��\ %��sUI���$�����Nu�����0w���i���w��`��:Ťj�a7�g2 � {2&̞s�����i4��^PR�����j����G���}r�������,(�,�A��p��a�BM����!K��e�j���Qo�Po��	�ͣCfP�ǔЦ�`ބa�
Rh+��I4�Zu6�'�T��8���)0�.H�f,��5�)8�l�e?�~Ҝ��qr�'��g���ٟ0�����%|T�xg�������^��:�Yag+���e۶� y˟r      W   �   x�u�Q�0D��]4�B-w���cQ˺��į7��K�h�ʺW�x��i�G���Év�.	ׄ�5��Zڗ�\ұ���޻��fv��#���[�7���fŇ#h�Z���pI��5�d��Xn>�E�p���i]��88G��h�(���pp��\_A���}��o��W�w���op�����o���� �"�Q� �y��op�Ο]����v�>)�8F���)���/���n      X   �   x�б�0�К&g��l����F߯�I����q8'n��/'_�g2�rG�[��v�qIݱ��%���rA�b��\�.���=P�@�e�=P�@�e�=P�@��3A�N���h{����-o�=��@����x?0��=0�������~�Z?��7      J   t  x�]�Ɏ�F�3�9̙�`�66`�fv��l0`V�I��!ϐK�Q�Q&���7Jw�8��DUI���_U4�8~|���������w��_������������������>�߿C�w�pu��)�|s���� sqÊ`��
c��\r����CD�ΐe�vO�?�jo����ę.	�R���p���t�V��=�/�>�r��ݝ���̒]��S�w���&i��^�����)f殩����OG�0W�5�P�f��0�
�探��������i�{�����(>?x,��j"kցk�mGe����W�?��p6�F�AUVޓ�N�XN�'���l��J�,;�(�ť�@fȡi12T�y�
Tur(�Fz�l��ܔ�,�/PbB�x�ƚ��^�'�mi~��ĕgאߪ�1kW�'*u
<4��th��lB7��6.Yi��WuF����j�/�]��%�iB�$��@3$�����s(����{����tb�ua�vK�,Z�'�X�R�y/�6>X��p�u�'gg!�s�x��b�����of�L�Wn�pӐ��7�'�$"5�}��kt3�KN�P%/��gY��H�D�|�y���W�]�d�&NޯA�	]iJ+K��>�g�M��T4����BM��n�#jME[X�h2e�@���E���Vkdq�ԁ��TP�C��$a����4����'��%����8�m"q/nH �\Z�����V�^�A0Y8T<��3�ʝ%�N��VL.g��F�EҢ4Q�9΍o�Kqpפ�O��w�8�4*��]�v���|�%Z�u������8�Uy�[V3�y�f��Q�TȜ#�pA��Ӂ����
���ƪ������B�W���]Ũ��4�����!�K>RG쏗��j\���l4E���Ԫ7A1��Y�\��D��=ñ��\y�/xGnAY���;Q%�Oj]?p�Bl����Z���(!OB�޵�P�@[�2
^�D�	ld��b��*>�i"=���6���-�S��b�Q*�q'i(�	Ҍ��d����i����	��C��	˲S}��wܞd,|]��i��+dU��0^�MӔ2�w1F)���ZV^_{W�
n�L���@ �!+D�/b���~zz���(�     