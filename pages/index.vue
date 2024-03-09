<template>
    <div>
        <p @contextmenu.prevent="$refs.menu.open">
            Right click on me
        </p>

        <vue-context ref="menu">
            <li>
                <a @click.prevent="onClick($event.target.innerText)">
                    Option 1
                </a>
            </li>
            <li>
                <a @click.prevent="onClick($event.target.innerText)">
                    Option 2
                </a>
            </li>
        </vue-context>
    </div>
</template>

<script>
import VueContext from 'vue-context';

export default {
    components: { VueContext },

    methods: {
        onClick(text) {
            alert(`You clicked "${text}"!`);
        },
    },
};

</script>