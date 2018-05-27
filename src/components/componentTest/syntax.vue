<template>
    <div>
    <!-- 文本 -->
    <div>Message {{ msg }}</div>
    <!-- 文本一次性插值 -->
    <div v-once>文本一次性插值 Message {{msg}}</div>
    <!-- 原始html -->
    <div v-html="html"></div>
    <div v-bind:id="dynamicId">Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令</div>
    <div>如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button v-bind:disabled="isButtonDisabled">禁用属性</button> 元素中</div>
    <div>
        模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。<br />
        {{new Date()}} <br />
        {{msg.split('').reverse().join('')}} <br />
        这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效<br />
        <!-- 这是语句，不是表达式 -->
        {{ "\{\{var a = 1\}\}" }}

        <!-- 流控制也不会生效，请使用三元表达式 -->
        {{ "\{\{if (ok) { return message }\}\}" }}
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this is a template test Mustache",
      html: '<span style="color: red;">this should be red</span>',
      dynamicId: "bind",
      isButtonDisabled: null
    };
  }
};
</script>

