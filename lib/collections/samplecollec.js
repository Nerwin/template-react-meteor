import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

SampleCollec = new Mongo.Collection("samplecollec", {
    transform: function (doc) {
        _.extend(doc, { type: 'samplecollec' });
        return doc;
    }
});

if (Meteor.isServer) {
    Meteor.publish('samplecollec', () => {
        return SampleCollec.find();
    });
}

SampleCollec.allow({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc){
        return true;
    }
});