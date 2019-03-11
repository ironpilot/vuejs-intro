<template>
    <div class="container">
        <h3>{{author.name}}</h3>
        <hr>
        <h5 class="mt-5">Posts</h5>
        <ul class="list-group">
            <li v-for="post in author.posts" class="list-group-item">

                <span class="badge badge-primary mr-1">{{post.upVotes}} <i class="fas fa-thumbs-up p-1"></i></span>
                <span class="badge badge-primary mr-3">{{post.downVotes}} <i class="fas fa-thumbs-down p-1"></i></span>
                {{post.message}}</li>
        </ul>
        <button type="button" @click="$router.go(-1)" class="btn btn-info mt-3">Back</button>

    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: ['authorId'],
        data: () => {
            return {
                authors: [
                    {
                        id: 1,
                        name: "User 1",
                        posts: [
                            {
                                message: 'Hello World',
                                upVotes: 8,
                                downVotes: 2,
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "The Expert Beginner",
                        posts: [
                            {
                                message: 'Who said anything about Javascript? We don\'t jump on every passing fad that comes along.',
                                upVotes: 0,
                                downVotes: 2,
                            },
                            {
                                message: 'It\'s a lot easier to follow the single responsibility principle when you have all of your code in a single, centralized class.',
                                upVotes: 5,
                                downVotes: 1,
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Khalid Abuhakmeh",
                        posts: [
                            {
                                message: 'When my dog wants to ride in the car, I just sit him in it and make vrooom noises #GoodEnough',
                                upVotes: 1,
                                downVotes: 3,
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            calcReputation: (author) => {
                return _.sumBy(author.posts, 'upVotes') - _.sumBy(author.posts, 'downVotes')
            }
        },
        computed: {
            author() {
                return _.find(this.authors, {id: parseInt(this.authorId)});
            }
        }
    }
</script>
