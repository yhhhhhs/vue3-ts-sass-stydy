module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
  // .eslintrc.js 文件
        rules: {
            // 每一项都是一个eslint规则，off，0等为当前规则值
            'no-console': 'off',
            'no-debugger': 'off',
            'no-redeclare':0,
            "no-useless-escape": 0,
            "no-mixed-spaces-and-tabs": 0,
            "valid-v-for":0
        },
}
