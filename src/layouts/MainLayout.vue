<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="assets/pic1.png" alt="Profile Picture" class="profile"> -->
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            
          </q-avatar>
          MY PROFILE
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/tini/Home" label="Home" />
        <q-route-tab to="/tini/ProfileDetailPath" label="Personal Details" />
        <q-route-tab to="/tini/EducationPath" label="Education Details" />
        <q-route-tab to="/tini/InterestPath" label="Skills and Hobbies" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>