<template>
    <div class="container">
        <h3>Authors</h3>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Author</th>
                <th>Reputation</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="author in authors">
                <th><router-link :to="'/authors/' + author.id">{{ author.name }}</router-link></th>
                <td>{{ calcReputation(author) }}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
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
        }
    }
</script>
