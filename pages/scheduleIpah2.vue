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
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>1)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue1"
                  format="HH:mm"
                  :hour-range="[
                    [0, 7],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <!-- <v-select
                  :items="items1"
                  label="Block"
                  v-model="block1"
                  class="short"
                ></v-select> -->
                <v-select
                  v-model="block1"
                  :items="items1"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration1"
                  :items="itemsDuration1"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration1"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance1"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>2)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue2"
                  format="HH:mm"
                  :hour-range="[
                    [0, 7],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block2"
                  :items="items2"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration2"
                  :items="itemsDuration2"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration2"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance2"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items3"
                  label="Block"
                  v-model="block3"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration3"
                  :items="itemsDuration3"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration3"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance3"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items4"
                  label="Block"
                  v-model="block4"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration4"
                  :items="itemsDuration4"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration4"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance4"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items5"
                  label="Block"
                  v-model="block5"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration5"
                  :items="itemsDuration5"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration5"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance5"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items6"
                  label="Block"
                  v-model="block6"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration6"
                  :items="itemsDuration6"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration6"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance6"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items7"
                  label="Block"
                  v-model="block7"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration7"
                  :items="itemsDuration7"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration7"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance7"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items8"
                  label="Block"
                  v-model="block8"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration8"
                  :items="itemsDuration8"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration8"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance8"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items9"
                  label="Block"
                  v-model="block9"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration9"
                  :items="itemsDuration9"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration9"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance9"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
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
              <div class="mx-3">
                <v-select
                  :items="items10"
                  label="Block"
                  v-model="block10"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="duration10"
                  :items="itemsDuration10"
                  label="Duration"
                  class="short"
                ></v-select>
                <!-- <v-text-field
                  label="Duration (min)"
                  :rules="rules"
                  type="number"
                  v-model="duration10"
                  class="short"
                ></v-text-field> -->
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance10"
                  class="short"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col>
              <vue-timepicker
                v-model="yourStringTimeValue6"
                format="HH:mm"
              ></vue-timepicker>
              <vue-timepicker
                v-model="yourStringTimeValue7"
                format="HH:mm"
              ></vue-timepicker>
              <vue-timepicker
                v-model="yourStringTimeValue8"
                format="HH:mm"
              ></vue-timepicker>
              <vue-timepicker
                v-model="yourStringTimeValue9"
                format="HH:mm"
              ></vue-timepicker>
              <vue-timepicker
                v-model="yourStringTimeValue10"
                format="HH:mm"
              ></vue-timepicker>
            </v-col>
          </v-row> -->
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-10">
      <TableSchedule :allDate="detail" />
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
import TableSchedule from "~/components/Schedule/TableSchedule.vue";
import moment from "moment";

import { mapMutations } from "vuex";

export default {
  middleware: ["isTkpmIpah"],
  layout: "status",
  components: { PageTitle, Calendar, Time, VueTimepicker, TableSchedule },
  data() {
    return {
      detail: [],
      rules: [value => !!value || ""],
      items1: ["1", "2", "3"],
      items2: ["1", "2", "3"],
      items3: ["1", "2", "3"],
      items4: ["1", "2", "3"],
      items5: ["1", "2", "3"],
      items6: ["1", "2", "3"],
      items7: ["1", "2", "3"],
      items8: ["1", "2", "3"],
      items9: ["1", "2", "3"],
      items10: ["1", "2", "3"],
      itemsDuration1: ["10", "20", "30"],
      itemsDuration2: ["10", "20", "30"],
      itemsDuration3: ["10", "20", "30"],
      itemsDuration4: ["10", "20", "30"],
      itemsDuration5: ["10", "20", "30"],
      itemsDuration6: ["10", "20", "30"],
      itemsDuration7: ["10", "20", "30"],
      itemsDuration8: ["10", "20", "30"],
      itemsDuration9: ["10", "20", "30"],
      itemsDuration10: ["10", "20", "30"],
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
      block1: "",
      block2: "",
      block3: "",
      block4: "",
      block5: "",
      block6: "",
      block7: "",
      block8: "",
      block9: "",
      block10: "",
      substance1: "",
      substance2: "",
      substance3: "",
      substance4: "",
      substance5: "",
      substance6: "",
      substance7: "",
      substance8: "",
      substance9: "",
      substance10: "",
      itemsSubstance: ["water", "fertilizer"],
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
      allDuration: [],
      allSubstance: []
    };
  },
  methods: {
    isDateBeforeToday: function(date) {
      // return (
      if (
        new Date(new Date(date.date).toDateString()) >=
        new Date(new Date().toDateString())
      ) {
        // console.log("here");
        // let data = {
        //   date: date.date,
        //   remarks: `Time : ${date.time} , Block : ${date.block} , duration : ${date.duration}`
        // };
        // this.detail2.push(data);
        this.detail.push(date);
        this.disabled.push(moment(date.date).format("YYYY-MM-DD"));
      }
      // );
    },
    getScheduleIpah1: function() {
      this.$axios
        .$get("http://139.59.109.48/api/schedule/ipah2")
        .then(response => {
          console.log(response);
          response.forEach(i => {
            // this.disabled.push(moment(i).format("YYYY-MM-DD"))
            console.log(i);
            this.isDateBeforeToday(i);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendScheduleIpah2: function(date, time, block, duration, substance) {
      this.$axios
        .$post("http://139.59.109.48/api/setSchedule/ipah2", {
          date: date,
          time: time,
          block: block,
          duration: duration,
          substance: substance
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

      // block
      if (this.block1) {
        this.allBlock.push(this.block1);
      }
      if (this.block2) {
        this.allBlock.push(this.block2);
      }
      if (this.block3) {
        this.allBlock.push(this.block3);
      }
      if (this.block4) {
        this.allBlock.push(this.block4);
      }
      if (this.block5) {
        this.allBlock.push(this.block5);
      }
      if (this.block6) {
        this.allBlock.push(this.block6);
      }
      if (this.block7) {
        this.allBlock.push(this.block7);
      }
      if (this.block8) {
        this.allBlock.push(this.block8);
      }
      if (this.block9) {
        this.allBlock.push(this.block9);
      }
      if (this.block10) {
        this.allBlock.push(this.block10);
      }

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

      // substance
      if (this.substance1) {
        this.allSubstance.push(this.substance1);
      }
      if (this.substance2) {
        this.allSubstance.push(this.substance2);
      }
      if (this.substance3) {
        this.allSubstance.push(this.substance3);
      }
      if (this.substance4) {
        this.allSubstance.push(this.substance4);
      }
      if (this.substance5) {
        this.allSubstance.push(this.substance5);
      }
      if (this.substance6) {
        this.allSubstance.push(this.substance6);
      }
      if (this.substance7) {
        this.allSubstance.push(this.substance7);
      }
      if (this.substance8) {
        this.allSubstance.push(this.substance8);
      }
      if (this.substance9) {
        this.allSubstance.push(this.substance9);
      }
      if (this.substance10) {
        this.allSubstance.push(this.substance10);
      }

      let allBlock2 = [];
      allBlock2.push(this.allBlock.join("/"));
      console.log(allBlock2);
      //
      this.selectedDate.forEach(date => {
        this.sendScheduleIpah2(
          date,
          this.allTime,
          allBlock2,
          this.allDuration,
          this.allSubstance
        );
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
.v-select__selection--comma {
  font-size: 0.8rem;
}
</style>
