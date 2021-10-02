<template>
  <section>
    <HelloComponent></HelloComponent>

    <hr>

    <styleComponent/>  

    <hr>

    <!-- we register the card wrapper in main.js because we mostly use this type of wrapper components in multiple places of our app -->

    <!-- if we not provide any thing notthing will show in slots -->
    <cardWrapper></cardWrapper>
    <!-- we can provide vue templaqte just like we use in other place -->
    <cardWrapper>
      <p v-if="true"> this is html replaced by slot {{ 1 + 1 }}  | we can also use templating and all vue feacture inside it.</p>
    </cardWrapper>
    <!-- we can also provide one or multiple components -->
    <cardWrapper>
      <postCard />
    </cardWrapper>

    <hr>
    <userCardWrapper>

      <template v-slot:userName> <h3> Vatsal Patel </h3> </template>
      <template v-slot:userinfo>
        <p>age: 24 </p>
        <p>conatct: 9104243444 </p>
      </template>
      <!-- you can also directly give html to show in default slot but it's good practic to give use defaylt in default slot to incress redablity -->
      <template v-slot:default>
        <p> vatsal patel is software developer from great India. </p>
      </template>

    </userCardWrapper>


    <hr>
    <!-- many time we don't kn know thich component to show on screen and want to calculate it dynamically then we can use component built in tage and provide is directiv which will be the name of component to dynamically show some component base on some calculation -->
    <button @click="currentComponent = 'HelloComponent'">Show Hello</button>
    <button @click="currentComponent = 'StyleComponent'">Show Style </button>
    <component :is="currentComponent"></component>
    <!-- now you can argue that we can use v-if insted of component for that but it's just another way to show dynamically components and also shorten way because we don't have to deal with multiple v-if and it's ideal to show tabs kind of things -->

    <!-- when you swetch between components with dynamic component when you switch to component other one will be distroyed so all inputs and states which we define in it will be lost so if you want to preserve that state you can wrap your compnent tag in between <keep-alive> </keep-alive> tag it will cash your sates and you won't louse state when you switch because component won't destroy-->

    <!-- see what is teleport in vue 3 doc  -->
    <!-- in vue 2 template you have to use one root emement and then you can use multiple elements inside it you cannot directly use multiple elements directly inside template tage you have to wrap them inside the any element but in vue 3 it's alloud you can use multiple elements directly in template tage without wrapping them inside root element -->

    <!-- in vue doc in doc section go to style guide section where you will find style guide you can follow for vue project try to use it as much as possible  -->

    <!-- always make subfolders in component and try to make folders base on feacture and add component which related to any feacture in that folder also try to add some common folders like
    1) Ui = add ui related components in it which is nostly design and not that much of logic
    2) common = add commanly and repetativly use components in it like pagination breadcrumbs  
    3) layout = add layout components which use in all places like header, footer, logo
    4) wrapper = add components which work as wrapper for other compoonents and also mostly use slots-->

  </section>
</template>

<script>
// local registration
import HelloComponent from './components/component-reg/HelloComponent.vue';
import StyleComponent from './components/style/StyleComponent.vue';

// slots
import postCard from './components/slots/PostCard.vue';

export default {
  components: {
    // there are multiple wayse to give name to registerd components cabab-case , snake case, pascal case
    // 'hello-component': HelloComponent,  
    // helloComponent: HelloComponent,
    HelloComponent,
    StyleComponent,
    postCard
  },
  // you can use any of that case to register a component and you can use any of case to use component in template vue will automatocally find the cabab, camel, pascal case of them
  // but it is recomended to use same case to both register and use in template to easilly find the component in bigger code base
  // also i priffer to use pascal or camel case to register and use it in template because it diffrenceat native and custome html elements and make our job easy to find component usage in our app  
  data() {
    return {
      currentComponent: "HelloComponent"
    };
  },
};
</script>

<style>

</style>