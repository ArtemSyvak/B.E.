<template>

    <div class="row justify-content-center align-items-center h-100">

        <div class="contact-div col-6">
            <div class="medium-div col-12">
                <div class="inner-div ">
                    <!--Need to change the mail to our clients' mail-->
                    <form  class="row">
                    <div class="col-6">
                        <br/>
                        <input type="text" name="name" v-model="client.name" required>
                        <hr id="name"/>
                        <p class="help-text"></p>
                        <br/>
                        <br/>
                        <br/>
                        <input type="text" name="phone" v-model="client.phone" required>
                        <hr id="phone"/>
                        <p class="help-text"></p>
                        <br/>
                        <br/>
                        <br/>
                        <input type="email" name="email" v-model="client.email" required>
                        <hr  id="email"/>
                        <p class="help-text"></p>

                    </div>

                    <div class="col-6 mt-3">
                        <textarea name="message" id="" cols="30" rows="1" v-model="client.message"></textarea>
                        <hr id="message"/>
                        <p class="help-text"></p>
                        <br/>
                        <br/>
                        <button id="send" @click="SendMail">
                            SEND
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import send from "../mailsend";
export default {
  name: "ContactUs",
  data() {
    return {
      client: {
        name: "",
        phone: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    SendMail() {
      send();
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
#title {
}
.contact-div {
  background-color: rgba(255, 255, 255, 0.1);
  height: 400px;
  position: absolute;

  .medium-div {
    background-color: rgba(255, 255, 255, 0.1);
    height: 92%;
    top: 4%;

    .inner-div {
      background-color: rgba(255, 255, 255, 0.1);
      position: relative;
      height: 92%;
      top: 4%;
      width: 100%;
      padding: 30px 20px 0 20px;
    }
  }
}
input,
textarea {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin: 0 20px;
  outline: none;
  color: #f9ed37;
  font-size: 15px;
  font-family: Roboto, Arial, sans-serif;
}
input {
  text-align: center;
  left: 0;
}

#name + .help-text::after {
  content: "FULL NAME";
}
#phone + .help-text::after {
  content: "PHONE";
}
#email + .help-text::after {
  content: "MAIL";
}
#message + .help-text::after {
  content: "TYPE YOUR MESSAGE HERE";
}
.help-text {
  color: #f9ed37;
  font-size: 8px;
  float: left;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(249, 237, 55, 0),
    rgba(249, 237, 55, 0.75),
    rgba(259, 237, 55, 0)
  );
  margin: 0 0 0 0;
}
#send {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #f9ed37;
  border-radius: 10px;
  padding: 3px 30px 3px 30px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  color: azure;
  transition-duration: 0.2s;
}
#send:active {
  padding: 3px 33px 3px 33px;
  transition-duration: 0.2s;
}
</style>
