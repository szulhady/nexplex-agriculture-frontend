<template>
  <section>
    <PageTitle title="STATUS" />
    <v-card class="elevation-10">
      <v-card-title>
        OPERATION
      </v-card-title>
      <v-row>
        <v-col col="12" class="col-md-9 pb-0">
          <KongPoStatus
            sv1="red"
            sv2="green"
            classSV1="filter-green"
            classSV2="filter-red"
            classSV3="filter-red"
            classSV4="filter-green"
            classPumpNaturalWater="filter-green"
            classPumpTappingWater="filter-green"
            classDosingPump="filter-red"
            EC="2"
          />
        </v-col>
        <v-col cols="12" class="col-md-3 pr-md-10 pt-0">
          <!-- <v-card class="elevation-18 rounded-lg px-5 mb-5">
            <v-card-title>
              STATUS
            </v-card-title>
          </v-card> -->
          <v-card class="elevation-18 rounded-lg px-5 ">
            <v-card-title>
              MANUAL CONTROL
            </v-card-title>
            <v-row>
              <v-col cols="4" class="col-md-12 col-lg-6 switch ">
                <v-switch
                  v-model="switchPumpTappingWater"
                  :label="`Pump Tapping Water`"
                  color="success"
                  inset
                  @click="
                    trigger(
                      'Pump Tapping Water',
                      switchPumpTappingWater,
                      'switchPumpTappingWater'
                    )
                  "
                  readonly
                ></v-switch>
              </v-col>
              <v-col cols="4" class="col-md-12 col-lg-6 switch ">
                <v-switch
                  v-model="switchPumpNaturalWater"
                  :label="`Pump Natural Water`"
                  color="success"
                  inset
                  @click="
                    trigger(
                      'Pump Natural Water',
                      switchPumpNaturalWater,
                      'switchPumpNaturalWater'
                    )
                  "
                  readonly
                ></v-switch>
              </v-col>
              <v-col cols="4" class="col-md-12 col-lg-6 switch">
                <v-switch
                  v-model="switchDosingPump"
                  :label="`Dosing Pump`"
                  color="success"
                  inset
                  @click="
                    trigger('dosing pump', switchDosingPump, 'switchDosingPump')
                  "
                  readonly
                ></v-switch>
              </v-col>
              <v-col cols="4" class="col-md-12 col-lg-6 switch">
                <v-switch
                  v-model="switchSV1"
                  :label="`SV1`"
                  color="success"
                  inset
                  @click="trigger('SV1', switchSV1, 'switchSV1')"
                  readonly
                ></v-switch>
              </v-col>
              <v-col cols="4" class="col-md-12 col-lg-6 switch">
                <v-switch
                  v-model="switchSV2"
                  :label="`SV2`"
                  color="success"
                  inset
                  @click="trigger('SV2', switchSV2, 'switchSV2')"
                  readonly
                ></v-switch>
              </v-col>
              <v-col cols="4" class="col-md-12 col-lg-6 switch">
                <v-switch
                  v-model="switchSV3"
                  :label="`SV3`"
                  color="success"
                  inset
                  @click="trigger('SV3', switchSV3, 'switchSV3')"
                  readonly
                ></v-switch>
              </v-col>
              <v-col cols="4" class="col-md-12 col-lg-6 switch">
                <v-switch
                  v-model="switchSV4"
                  :label="`SV4`"
                  color="success"
                  inset
                  @click="trigger('SV4', switchSV4, 'switchSV4')"
                  readonly
                ></v-switch>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-scroll-y-transition>
      <div class="layer2" v-if="layerDrawer" id="layerDrawer"></div>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card class="logout elevation-12" v-if="layerDrawer">
        <v-card-title>
          Action
        </v-card-title>
        <hr class="hr" />
        <v-card-subtitle>
          Are you sure you want to {{ stateDevice }} the {{ activeDevice }}?
        </v-card-subtitle>
        <div class="btn-div">
          <v-btn @click="yes(activeSwitch)" class="success logout-btn"
            >Yes</v-btn
          >
          <v-btn @click="cancel" class="error logout-btn">Cancel</v-btn>
        </div>
      </v-card>
    </v-scroll-y-transition>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import KongPoStatus from "~/components/Status/KongPoStatus.vue";

export default {
  middleware: ["isKongPo"],
  layout: "status",
  methods: {
    trigger: function(device, state, deviceName) {
      this.state2 = false;
      this.layerDrawer = true;
      this.activeDevice = device;
      this.activeSwitch = deviceName;
      if (state == true) {
        this.stateDevice = "turn off";
      } else {
        this.stateDevice = "turn on";
      }
      console.log(this.activeDevice);
      console.log(this.activeSwitch);
      // this.switchPump = !this.switchPump;
    },
    yes: async function(Device) {
      // console.log(Device);
      this.layerDrawer = false;
      // this.switchPump = !this.switchPump;
      this[Device] = !this[Device];
    },
    cancel: function() {
      this.layerDrawer = false;
    },
    track: function() {
      window.onclick = event => {
        const modal = document.getElementById("layerDrawer");
        if (event.target == modal) {
          this.layerDrawer = false;
        }
      };
    }
  },
  components: {
    PageTitle,
    KongPoStatus
  },
  data() {
    return {
      activeDevice: "",
      stateDevice: "",
      activeSwitch: "",
      layerDrawer: false,
      state2: true,
      rightDrawer: false,
      switchPumpNaturalWater: false,
      switchPumpTappingWater: false,
      switchDosingPump: false,
      switchSV1: false,
      switchSV2: false,
      switchSV3: false,
      switchSV4: false
    };
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
  /* display: inline-block; */
  /* transition: transform 150ms ease-in-out; */
}
.overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  /* display: inline-block; */
  /* transition: transform 150ms ease-in-out; */
}

.filter-green {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(90%) contrast(119%);
  -webkit-animation: blinkGreen 1s infinite;
  -moz-animation: blinkGreen 1s infinite;
  -ms-animation: blinkGreen 1s infinite;
  -o-animation: blinkGreen 1s infinite;
  animation: blinkGreen 1s infinite;
}

.filter-red {
  filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
    brightness(94%) contrast(117%);
  -webkit-animation: blinkRed 1s infinite;
  -moz-animation: blinkRed 1s infinite;
  -ms-animation: blinkRed 1s infinite;
  -o-animation: blinkRed 1s infinite;
  animation: blinkRed 1s infinite;
}

/* BLINK RED */
@-webkit-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    /* background-color: #f00; */
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-moz-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-ms-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-o-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}

/* BLINK GREEN */
@-webkit-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    /* background-color: #f00; */
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-moz-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-ms-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-o-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
.switch {
  /* max-width: 92%; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}

/* logout */
.logout {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 300px;
}

.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.btn-div {
  display: flex;
  justify-content: flex-end;
}

.logout-btn {
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* layer */

.layer2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  /* z-index: 999; */
  top: 0;
  left: 0;
}

@media (max-width: 1264px) {
  .switch {
    /* max-width: 92%; */
    align-items: center;
    /* justify-content: center; */
  }
}
</style>
