import { Injectable } from '@angular/core';
// Firebase Database
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
// Our class exercise
import {Exercise} from './exercise';



@Injectable()
export class ExerciseService {


  private basePath = '/exercises';

  exercises: FirebaseListObservable<Exercise[]> = null; //  list of objects
  exercise: FirebaseObjectObservable<Exercise> = null; //   single object

  constructor(private db: AngularFireDatabase) { }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getExerciseList(query = {}): FirebaseListObservable<Exercise[]> {
    this.exercises = this.db.list(this.basePath, {
      query: query
    });
    return this.exercises
  }

  // Return a single observable item
  getExercise(key: string): FirebaseObjectObservable<Exercise> {
    const exercisePath = `${this.basePath}/${key}`;
    this.exercise = this.db.object(exercisePath)
    return this.exercise
  }

  // Create a brand new item
  createExercise(exercise: Exercise): void {
    this.exercises.push(exercise)
      .catch(error => this.handleError(error))
  }


  // Update an exisiting item
  updateItem(key: string, value: any): void {
    this.exercises.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteExercise(key: string): void {
    this.exercises.remove(key)
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.exercises.remove()
      .catch(error => this.handleError(error))
  }


  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }


}

