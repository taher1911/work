import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// TODO implement state for :
// - content files
// - page links

// percistantState
export const dataStore = {};

// flux paradigm
export const state = () => ({
    dark: true,
    data: {
        servicesCards: [
            {
                id: 1,
                icon: "pi-sitemap",
                title: "Networking and Security",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
            },
            {
                id: 2,
                icon: "pi-lock",
                title: "Cyber Security Solutions",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
            },
            {
                id: 3,
                icon: "pi-globe",
                title: "IT & Cloud Management",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
            },
            {
                id: 4,
                icon: "pi-check-circle",
                title: "Diployment And Migration",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
            },
            {
                id: 5,
                icon: "pi-external-link",
                title: "Managed Web Application",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
            },
            {
                id: 6,
                icon: "pi-slack",
                title: "Cyber Disaster Planning",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
            },
        ],
        clients: [
            {
                id: 1,
                img: "https://www.bc.edu/content/bc-web/offices/human-resources/about/meet-our-staff/_jcr_content/bottompar/bc_padded_section/par/responsive_columns_794043069/col1/bc_image_content/image.img.png/1589566905809.png",
                name: "Jane Doe",
                job: "CEO.Company",
                comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!",
            },
            {
                id: 2,
                img: "https://emaidsinc.com/wp-content/uploads/2020/02/career-img-1-300x300.png",
                name: "Martine joe",
                job: "CEO.Company",
                comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!",
            },
            {
                id: 3,
                img: "https://www.vanderbloemen.com/hubfs/Icons%20for%20Offerings%20(2).png",
                name: "jessey penk",
                job: "CEO.Company",
                comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!",
            },
            {
                id: 4,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhd2s2kblPTy9bojBxaOUcmaictlpWHkBxw&usqp=CAU",
                name: "Roze alberto",
                job: "CEO.Company",
                comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!",
            },
        ],
    },
});

// sync mutations (commit)
export const mutations = {
    resetData() {
        state.data = null;
        console.log("resetData " + state.data);
    },
    SET_DATA(state, data) {
        state.data = data;
    },
    UPDATE_DARK(state, dark) {
        state.dark = dark;
    },
};

// async actions (dispatch)
export const action = {};

export const getters = {
    dataLength: (state) => {
        return state.data.length;
    },
    darkMode: (state) => {
        return state.dark;
    },
};
