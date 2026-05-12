# Family Expenses - ServiceNow Application

ServiceNow SDKを使用した家計管理アプリケーションプロジェクトです。

## 前提条件

- Git
- Node.js 20以上
- nvm（Node Version Manager）

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/senkkk/sn-family-expenses.git
cd sn-family-expenses
```

### 2. Node.js 20のセットアップ

```bash
# bashrcをソース
source ~/.bashrc

# Node.js 20のインストール
nvm install 20

# Node.js 20を使用
nvm use 20

```

### 3. インストール状況の確認

```bash
node -v        # v20.20.2
npm -v         # 10.8.2
npx -v         # 10.8.2
```

### 4. ServiceNow SDK CLIのインストール

ServiceNow SDK CLIをグローバルにインストールします：

```bash
npm install -g @servicenow/sdk
```

### 5. ServiceNow SDK認証情報の追加

インスタンスへの認証情報を登録します：

```bash
npx @servicenow/sdk auth --add インスタンスURL
```

プロンプトで以下を入力：
- **Authentication type**: `basic`
- **Alias**: `now-sdk-user`
- **Username**: `now-sdk-user`
- **Password**: （ServiceNowインスタンスのパスワード）

### 6. 依存関係のインストール

```bash
npm install
```

## データモデル案

家庭内メンバーは ServiceNow の `sys_user` をそのまま利用します。申請テーブルは Task テーブルを拡張し、アプリ側では立替金精算に必要な最小限の3テーブルを定義します。

| テーブル | 目的 | 主な項目 |
|---------|------|----------|
| `x_144721_family_ex_reimbursement_request` | Task を拡張した申請単位のヘッダー。Task 由来の申請番号を持ち、申請者・精算で支払う人・精算状態も Task 既存項目で管理します。 | 申請番号（Task 由来）、件名（Short description）、申請者（Requested by）、精算で支払う人（Assigned to）、状態（State）、アクティブ（Active）、備考 |
| `x_144721_family_ex_expense_line` | 立替明細。1明細につき立替者は1名のみです。 | 申請、立替者、利用日、内容、立替金額、備考 |
| `x_144721_family_ex_expense_share` | 明細ごとの負担内訳。負担する人ごとに1行作成します。 | 立替明細、負担する人、負担額、備考 |

この構成では、申請に複数の立替明細をぶら下げ、各明細に複数の負担内訳を登録します。精算の実行はシンプルに、申請ヘッダーの「精算で支払う人（Assigned to）」「状態（State）」「アクティブ（Active）」で管理します。

## ビルドとデプロイ

### ビルド

```bash
npm run build
# または
npx @servicenow/sdk build
```

### デプロイ

```bash
npm run deploy
# または
npx @servicenow/sdk deploy --auth now-sdk-user
```

## プロジェクト構成

```
sn-family-expenses/
├── src/
│   ├── fluent/               # Fluent API関連
│   │   ├── family_expenses.now.ts
│   │   └── generated/
│   │       └── keys.ts
│   ├── server/               # サーバーサイドコード
│   │   ├── script.ts
│   │   └── tsconfig.json
│   ├── tsconfig.json
│   ├── tsconfig.client.json
│   └── tsconfig.server.json
├── target/                   # ビルド出力
├── now.config.json           # ServiceNow SDK設定
├── package.json
└── README.md
```

## 主要なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run build` | プロジェクトをビルド |
| `npm run deploy` | ServiceNowインスタンスにデプロイ |
| `npm run transform` | コードを変換 |
| `npm run types` | 依存関係の型情報を生成 |

## トラブルシューティング

### 認証エラー

認証情報が保存されていない場合は、再度以下を実行：
```bash
npx @servicenow/sdk auth --add https://dev314835.service-now.com/
```

### ビルドエラー

キャッシュをクリアして再度ビルド：
```bash
rm -rf target/
npm run build
```

## ロールバック

デプロイ後にロールバック（元に戻す）が必要な場合は、デプロイ出力に表示されたロールバックリンクを使用：
```
https://dev314835.service-now.com/sys_rollback_context.do?sys_id=<ID>
```

## ライセンス

UNLICENSED
