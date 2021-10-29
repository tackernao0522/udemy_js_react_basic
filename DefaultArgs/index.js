'use strict';

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "匿名") => console.log(`こんにちは！${name}さん！`) // こんにちは！匿名さん！
sayHello();
