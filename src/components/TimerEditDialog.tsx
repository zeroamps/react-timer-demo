import { Button, Form, Modal } from 'react-bootstrap';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormatPlugin);

const INPUT_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

type Props = {
  name?: string;
  target?: Date;
  onClose: () => void;
  onSave: (name: string, target: Date) => void;
};

type Inputs = {
  name: string;
  target: string;
};

export function TimerEditDialog({ name, target, onClose, onSave }: Props) {
  const defaultName = name ? name : '';
  const defaultTarget = target ? dayjs(target).format(INPUT_DATETIME_FORMAT) : '';
  const defaultValues = { name: defaultName, target: defaultTarget };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ defaultValues });

  const handleSubmitForm: SubmitHandler<Inputs> = (data) => {
    onSave(data.name, new Date(data.target));
  };

  return (
    <Modal show={true} centered onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Timer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, maxLength: 64 }}
              render={({ field }) => <Form.Control isInvalid={!!errors.name} placeholder="Enter name" {...field} />}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTarget">
            <Form.Label>Target</Form.Label>
            <Controller
              name="target"
              control={control}
              rules={{ required: true, validate: (value) => dayjs(value, INPUT_DATETIME_FORMAT, true).isValid() }}
              render={({ field }) => (
                <Form.Control isInvalid={!!errors.target} placeholder="Enter a valid target date and time" {...field} />
              )}
            />
            <Form.Text className="fs-8 text-muted px-1">Use a valid format: {INPUT_DATETIME_FORMAT}</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button form="form" type="submit" variant="success">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
