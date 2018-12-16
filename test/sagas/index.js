import test from 'tape';
import { call, fork, put, select, take } from 'redux-saga/effects';
import { workerSaga } from '../../src/sagas';


test('workerSaga', t => {
    const fn = () => [1, 2, 3];
    const redditName = 'react_reddit';
    const generator = workerSaga(fn);
    const success = () =>
    t.deepEqual(generator.next().value, call(fn), 'must call fn')
    t.deepEqual(
        generator.next(mockPosts).value,
        put(success(mockPosts)),
        'must dispatch a success action with posts',
    )
    t.ok(generator.next().done, 'must finish')
    t.end()
})
