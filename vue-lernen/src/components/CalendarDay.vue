<template>
    <div class="card">
        <div 
            class="card-header text-center bg-vue"
            style="cursor: pointer;"
            @click="setActiveDay(day.id)"
        >
            <strong>{{ day.fullName }}</strong>
        </div>
        <div class="card-body" :class="getActiveDay">
            <div>{{ day.id }} </div>

            <CalendarEvent 
                v-for="(event, index) in day.events"
                :key="index"
                :event="event"
                :day="day"
            />

        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CalendarEvent from './CalendarEvent.vue';

export default {
    name: 'CalendarDay',
    props: ['day'],
    components: {
        CalendarEvent
    },
    computed: {
        getActiveDay() {
            if (this.day.active) {
                return "alert-primary" ;
            } else { return "" }
        }

    },
    methods: {
        setActiveDay(dayId) {
            store.setActiveDay(dayId);
        }
    }
}
</script>

<style scoped>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: white;
  }
</style>