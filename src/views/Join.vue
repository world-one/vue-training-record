<template>
  <div class="container">
    <section class="p-top-1 column is-4 is-offset-4">

      <form class="wrap">

        <div class="field">
          <label class="label">Nickname</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="사용할 닉네임을 적어주세요">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <p class="control has-icons-left">
            <input class="input" autocomplete="false" type="password" placeholder="비밀번호를 입력해주세요">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        
        <div v-if="signin">
          <div class="field">
            <label class="label">Question</label>
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="본인 확인용 질문을 입력해주세요">
              <span class="icon is-small is-left">
                <i class="far fa-question-circle"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Answer</label>
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="본인 확인용 답변을 입력해주세요">
              <span class="icon is-small is-left">
                <i class="far fa-question-circle"></i>
              </span>
            </p>
          </div>
        </div>

        <button type="submit" class="m-top-5 button is-fullwidth is-primary" 
          v-html="signin ? '가입' : '로그인'"></button>

      </form>
      <button class="button is-fullwidth m-top-7" 
        @click="pageCheck"
        v-html="!signin ? '가입하기' : '로그인하기'"></button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Join extends Vue {
  public signin = true;
  constructor() {
    super();
  }
  public mounted() {
    this.pageCheck();
  }
  public pageCheck() {
    const page = this.$route.params.page;
    this.signin = !this.signin;
  }
}
</script>