<template>
    <v-toolbar dark color="teal">
        <v-toolbar-title>Search</v-toolbar-title>
        <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="What are you looking for?"
            solo-inverted
        ></v-autocomplete>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
</template>
