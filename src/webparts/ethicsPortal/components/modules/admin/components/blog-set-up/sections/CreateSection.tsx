import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { sp } from "@pnp/sp";
import * as React from "react";
import { Policy } from "../../../../employee/components/PolicyLandingComponent";

type Props = {
  section: Policy;
  onUpdate: React.Dispatch<Policy>;
};

export const CreateSection: React.FC<Props> = ({ onUpdate, section }) => {
  const [sectionsNew, setSections] = React.useState<Policy[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await sp.web.lists
        .getByTitle("PolicyConfiguration")
        .items.getAll();
      setSections(res);
    })();
  }, []);

  return (
    <Autocomplete
      id="type"
      freeSolo={false}
      options={sectionsNew}
      fullWidth
      value={section}
      getOptionLabel={(option) => option.PolicyTitle}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a section"
          margin="normal"
          variant="outlined"
        />
      )}
      onChange={(e, newvalue) => onUpdate(newvalue)}
    />
  );
};
