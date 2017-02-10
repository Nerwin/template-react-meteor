import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import Future from 'fibers/future';

Meteor.methods({

    makeGetRequest: function (param) {
        var future = new Future;
        check(param, Object);
        check(param.url, String);
        check(param.params, Object);
        this.unblock();
        HTTP.call("GET", param.url,
            { params: param.params },
            function (error, result) {
                if (error)
                    throw error;
                future.return(result);
            });
        return future.wait();
    },
    makePostRequest: function (param) {
        var future = new Future;
        check(param, Object);
        check(param.url, String);
        check(param.data, Object);
        this.unblock();
        HTTP.call("POST", param.url,
            {
                headers: {
                    'content-type': 'application/json; charset=UTF-8',
                    'Accept-Language': 'fr-FR',
                },
                data: param.data
            },
            function (error, result) {
                if (error)
                    throw error;
                future.return(result);
            });
        return future.wait();
    },
});