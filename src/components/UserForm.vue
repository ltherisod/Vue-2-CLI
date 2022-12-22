<template>
  <div>
    <div v-if="errors.length !== 0" class="errors">
      {{ showErrors }}
    </div>
    <div class="containerdiv">
      <h2>Please Complete de Form</h2>
      <form id="formdata" action="" @submit.prevent="userData" class="w-50">
        <label for="name" class="text-start">Complete Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Complete Name"
        />
        <p>
          <label for="email" class="form-label text-start">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="neko@sushi.com"
          />
          <label for="telefone" class="form-label text-start">Phone number</label>
          <input
            v-model="telefone"
            type="number"
            class="form-control"
            id="telefone"
            placeholder="54 224 4567895"
          />
          <label for="img" class="form-label text-start">Profile Picture</label>
          <input
            v-model="img"
            type="text"
            class="form-control"
            id="img"
            placeholder="https://myprofilepic.com"
          />
          <label for="countrySelector">Please select your country</label>
          <select
            v-model="country"
            name="countrySelector"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected></option>
            <option v-for="country in this.countryList" :key="country" :value="country">
              {{ country }}
            </option>
          </select>

          <label for="address" class="form-label text-start">Delivery Address</label>
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="address"
            placeholder="Fake Street 1234"
          />
          <br />
          <label for="password" class="form-label text-start">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Your Password has to be 10 caracters long"
          />
          <br />
          <label for="secondpass" class="form-label text-start">
            Repeat your password</label
          >
          <input
            v-model="secondpass"
            type="password"
            class="form-control"
            id="secondpass"
            placeholder="Repeat your password"
          />
          <br />
        </p>

        <div class="d-flex justify-content-between" style="width: 70%">
          <p><strong>Do you want tu subscribe to out newsteller?</strong></p>
          <div>
            <label for="subscribe" class="ml-5">✔️Yes!</label>
            <input
              v-model="subscribe"
              type="checkbox"
              name="subscribe"
              class="form-check-input ml-5"
              value="true"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between" style="width: 70%">
          <p>Please accept terms and policity of neko</p>
          <div>
            <label for="terms"> ✔️Yes!</label>
            <input
              v-model="terms"
              type="checkbox"
              name="terms"
              class="form-check-input"
              value="true"
            />
          </div>
        </div>
        <hr />
        <div class="col-2">
          <input type="submit" class="btn btn-dark" value="SEND" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserForm",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      telefone: "",
      img: "",
      country: "",
      address: "",
      subscribe: false,
      terms: false,
      password: "",
      secondpass: "",
      errors: [],
      countryList: [
        "Argentina",
        "Bahrain",
        "Bangladesh",
        "Brazil",
        "Chad",
        "Chile",
        "China",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Ecuador",
        "Egypt",
        "Finland",
        "France",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guyana",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Korea",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Panama",
        "Paraguay",
        "Peru",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Romania",
        "Samoa",
        "Slovenia",
        "Thailand",
        "Togo",
        "Tokelau",
        "Tonga",
        "Tunisia",
        "Turkey",
        "Uruguay",
        "Venezuela",
      ],
    };
  },
  methods: {
    userData() {
      if (
        this.name.length > 5 &&
        this.telefone.length > 8 &&
        this.email &&
        this.img.length > 8 &&
        this.address.length > 2 &&
        this.terms === true &&
        this.password.length > 6 &&
        this.password === this.secondpass &&
        this.country
      ) {
        let data = {
          name: this.name,
          email: this.email,
          telefone: this.telephone,
          img: this.img,
          country: this.country,
          address: this.address,
          subscribe: this.subscribe,
          terms: this.terms,
          password: this.password,
        };
        this.$store.dispatch("postUsers", data);
        this.$toastr.s(`Excellente user ${this.name} added!`);
        this.name = "";
        this.email = "";
        this.telephone = "";
        this.img = "";
        this.country = "";
        this.address = "";
        this.subscribe = "";
        this.terms = "";
        this.password = "";
        this.secondpass = "";
        this.country = "";
        this.$router.push("/");
        return true;
      }
      if (!this.name) {
        this.errors.push("Please complete this field");
      }
      if (this.name.length < 5) {
        this.errors.push("Your name is too short!");
      }

      if (this.address.length < 3) {
        this.errors.push("Please complete a valid address");
      }
      if (this.telefone.length < 8) {
        this.errors.push("Please complete a valid phone number");
      }
      if (!this.email) {
        this.errors.push("Please complete with a valid email");
      }
      if (this.terms !== true) {
        this.errors.push("Please accept our terms to continue");
      }
      if (this.password.length < 10) {
        this.errors.push("Your password is too poor");
      }
      if (this.password !== this.secondpass) {
        this.errors.push("Your passwords doesn't match");
      }
      if (!this.country) {
        this.errors.push("Please select your country");
      }

      setTimeout(() => {
        this.errors = [];
      }, 3000);
    },
  },
  computed: {
    showErrors() {
      let toastError = this.errors.map((error) => this.$toastr.e(error));
      return toastError;
    },
  },
};
</script>
<style>
.containerdiv {
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.errors {
  display: none;
}
</style>
