<template>
  <section>
    <PageTitle title="SCHEDULE" />
    <v-card>
      <v-card-title>
        Set schedule for fertigation
      </v-card-title>
      <v-row>
        <v-col
          cols="12"
          class="pl-8 col-lg-3"
          style="display:flex;flex-direction:column;justify-content:center;align-items:center"
        >
          <div>
            <h4>Select Date</h4>
            <h5>Can be a day or range of days</h5>
            <span>
              <vc-date-picker
                :min-date="today"
                :disabled-dates="disabled"
                v-model="range"
                is-range
              ></vc-date-picker>
              <!-- :attributes="attributes" -->
              <!-- @dayclick="onDayClick" -->
            </span>
          </div>

          <div>
            <v-btn class="mt-5" @click="sendSchedule">
              SET SCHEDULE
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="mx-auto col-lg-9">
          <v-row>
            <v-col class="ml-10 ml-lg-0">
              <h4>
                Please fill first option first, then fill other options if
                needed. Options for 7am and 1pm are not available due to
                nutrient preparation process ongoing.
              </h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>1)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue1"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration1"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>2)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue2"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration2"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>3)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue3"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration3"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>4)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue4"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration4"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>5)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue5"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration5"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>6)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue6"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration6"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>7)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue7"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration7"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>8)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue8"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration8"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>9)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue9"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration9"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-sm-6">
              <div class="mr-8">
                <label>10)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue10"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div style="">
                <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration10"
                  class="short"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
import VueTimepicker from "vue2-timepicker";

// CSS
import "vue2-timepicker/dist/VueTimepicker.css";
import PageTitle from "~/components/PageTitle";
import Calendar from "~/components/Schedule/Calendar.vue";
import Time from "~/components/Schedule/Time.vue";
import moment from "moment";

import { mapMutations } from "vuex";

export default {
  middleware: ["isKongPo"],
  layout: "status",
  components: { PageTitle, Calendar, Time, VueTimepicker },
  data() {
    return {
      rules: [value => !!value || ""],
      duration1: "",
      duration2: "",
      duration3: "",
      duration4: "",
      duration5: "",
      duration6: "",
      duration7: "",
      duration8: "",
      duration9: "",
      duration10: "",
      today: moment().format("YYYY-MM-DD"),
      availableDates: [],
      disabled: [],
      days: [],
      selectedDate: [],
      date: new Date(),
      timezone: "",
      range: {
        start: new Date(2020, 8, 19),
        end: new Date(2020, 8, 20)
      },
      start: "",
      end: "",
      //
      time: [],
      time1: "",
      yourStringTimeValue1: "",
      yourStringTimeValue2: "",
      yourStringTimeValue3: "",
      yourStringTimeValue4: "",
      yourStringTimeValue5: "",
      yourStringTimeValue6: "",
      yourStringTimeValue7: "",
      yourStringTimeValue8: "",
      yourStringTimeValue9: "",
      yourStringTimeValue10: "",
      allTime: [],
      allBlock: [],
      allDuration: []
    };
  },
  methods: {
    getScheduleIpah1: function() {
      this.$axios
        .$get("http://139.59.109.48/api/schedule/kongPo")
        .then(response => {
          console.log(response);
          response.forEach(i =>
            this.disabled.push(moment(i).format("YYYY-MM-DD"))
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendScheduleIpah1: function(date, time, duration) {
      this.$axios
        .$post("http://139.59.109.48/api/setSchedule/kongPo", {
          date: date,
          time: time,
          duration: duration
        })
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDatesBetweenDates: function(startDate, endDate) {
      let dates = [];
      //to avoid modifying the original date
      const theDate = new Date(startDate);
      while (theDate < endDate) {
        dates = [...dates, moment(new Date(theDate)).format("YYYY-MM-DD")];
        theDate.setDate(theDate.getDate() + 1);
      }
      dates = [...dates, moment(endDate).format("YYYY-MM-DD")];
      return dates;
    },
    sendSchedule: function() {
      if (this.selectedDate.length < 1) {
        alert("Please select valid date");
        return;
      }
      if (
        this.yourStringTimeValue1.includes("mm") ||
        this.yourStringTimeValue1.includes("hh") ||
        !this.yourStringTimeValue1
      ) {
        alert("Please select valid time");
        return;
      }

      // time
      if (this.yourStringTimeValue1) {
        this.allTime.push(this.yourStringTimeValue1);
      }
      if (this.yourStringTimeValue2) {
        this.allTime.push(this.yourStringTimeValue2);
      }
      if (this.yourStringTimeValue3) {
        this.allTime.push(this.yourStringTimeValue3);
      }
      if (this.yourStringTimeValue4) {
        this.allTime.push(this.yourStringTimeValue4);
      }
      if (this.yourStringTimeValue5) {
        this.allTime.push(this.yourStringTimeValue5);
      }
      if (this.yourStringTimeValue6) {
        this.allTime.push(this.yourStringTimeValue6);
      }
      if (this.yourStringTimeValue7) {
        this.allTime.push(this.yourStringTimeValue7);
      }
      if (this.yourStringTimeValue8) {
        this.allTime.push(this.yourStringTimeValue8);
      }
      if (this.yourStringTimeValue9) {
        this.allTime.push(this.yourStringTimeValue9);
      }
      if (this.yourStringTimeValue10) {
        this.allTime.push(this.yourStringTimeValue10);
      }
      // console.log(this.allTime);

      // duration
      if (this.duration1) {
        this.allDuration.push(this.duration1);
      }
      if (this.duration2) {
        this.allDuration.push(this.duration2);
      }
      if (this.duration3) {
        this.allDuration.push(this.duration3);
      }
      if (this.duration4) {
        this.allDuration.push(this.duration4);
      }
      if (this.duration5) {
        this.allDuration.push(this.duration5);
      }
      if (this.duration6) {
        this.allDuration.push(this.duration6);
      }
      if (this.duration7) {
        this.allDuration.push(this.duration7);
      }
      if (this.duration8) {
        this.allDuration.push(this.duration8);
      }
      if (this.duration9) {
        this.allDuration.push(this.duration9);
      }
      if (this.duration10) {
        this.allDuration.push(this.duration10);
      }

      //
      this.selectedDate.forEach(date => {
        this.sendScheduleIpah1(date, this.allTime, this.allDuration);
      });
    }
  },
  watch: {
    range: function(val) {
      this.start = moment(this.range.start).format("YYYY-MM-DD");
      this.end = moment(this.range.end).format("YYYY-MM-DD");
      var dateList = this.getDatesBetweenDates(
        this.range.start,
        this.range.end
      );
      // console.log(dateList);
      this.selectedDate = dateList;
    }
  },
  async mounted() {
    this.getScheduleIpah1();
  }
};
</script>

<style>
.userInput {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}

.v-messages__message {
  font-size: 0.5rem !important;
}

.v-select .v-select__selections {
  width: 300px !important;
}

/* .v-input {
  width: 80px;
} */

.short {
  width: 80px;
}
</style>
